import { supabase } from "./supabaseClient";

export async function trackVisitor() {
  let visitorId = localStorage.getItem("visitor_id");

  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem("visitor_id", visitorId);

    await supabase.from("visitors").insert({
      visitor_id: visitorId,
      page_views: 1,
    });
  } else {
    await supabase.rpc("increment_page_view", {
      v_id: visitorId,
    });
  }

  return visitorId;
}
