import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {

  const body = await req.json();
  const { name, phone, message } = body;

  if (!phone || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  // 1️⃣ Check customer
  let { data: customer, error: customerError } = await supabase
    .from("customers")
    .select("*")
    .eq("phone", phone)
    .single();

  if (!customer) {
    const { data: newCust, error: insertCustErr } = await supabase
      .from("customers")
      .insert([{ name, phone }])
      .select()
      .single();

    if (insertCustErr) {
      console.error(insertCustErr);
      return Response.json({ error: "Failed to create customer" }, { status: 500 });
    }

    customer = newCust;
  }

  // 2️⃣ Get or create chat
  let { data: chat, error: chatErr } = await supabase
    .from("chats")
    .select("*")
    .eq("customer_id", customer.id)
    .single();

  if (!chat) {
    const { data: newChat, error: chatCreateErr } = await supabase
      .from("chats")
      .insert([{ customer_id: customer.id }])
      .select()
      .single();

    if (chatCreateErr) {
      console.error(chatCreateErr);
      return Response.json({ error: "Failed to create chat" }, { status: 500 });
    }

    chat = newChat;
  }

  // 3️⃣ Insert message
  const { error: msgErr } = await supabase
    .from("messages")
    .insert([
      {
        chat_id: chat.id,
        sender: "user",
        message,
      },
    ]);

  if (msgErr) {
    console.error(msgErr);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }

  return Response.json({ success: true, chat_id: chat.id });
}
