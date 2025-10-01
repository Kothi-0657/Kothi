"use client";

import { useState } from "react";

type ContactFormProps = {
  onSuccess?: () => void; // optional callback after successful submit
};

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ Validation function
  const validateForm = (formData: FormData): string | null => {
    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const requirements = formData.get("requirements")?.toString().trim() || "";
    const visitSchedule = formData.get("visitSchedule")?.toString().trim() || "";

    if (name.length < 3) return "Name must be at least 3 characters long.";
    if (!/^\d{10}$/.test(phone)) return "Phone number must be exactly 10 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
    if (requirements.length < 10) return "Requirements should be at least 10 characters.";
    if (!visitSchedule) return "Please select a preferred visit schedule.";

    return null; // ✅ valid
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // ✅ Run validation before sending
    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbx5m2A2DjI5SgDvhHr9P4HFyvjK6bVHqrqY9Jl88ZW3IfEZSDYsElWb6n6qYyye3SdVdg/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();

      if (result.status === "success") {
        setSuccess(true);
        form.reset();

        setTimeout(() => {
          setSuccess(false);
          if (onSuccess) onSuccess();
        }, 2000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center textcolor2dark">
        Connect With Us
      </h2>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
          minLength={3}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number (10 digits)"
          className="w-full p-3 border rounded-lg"
          pattern="[0-9]{10}"
          title="Phone number must be 10 digits"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="requirements"
          placeholder="Requirements in brief"
          className="w-full p-3 border rounded-lg"
          rows={3}
          required
        />
      
  <div className="grid grid-cols-2 gap-4">
  <div className="relative">
    <input
      type="date"
      name="visitDate"
      className="w-full p-2 rounded-xl border border-black/30 bg-white/20 backdrop-blur-md text-black placeholder-gray/70 focus:ring-2 focus:ring-orange-400 mt-6"
      required
    />
    <span className="absolute left-3 top-1 text-xs text-orange-300">Date</span>
  </div>
  <div className="relative">
    <input
      type="time"
      name="visitTime"
      className="w-full p-2 rounded-xl border border-black/30 bg-white/20 backdrop-blur-md text-black placeholder-gray/70 focus:ring-2 focus:ring-orange-400 mt-6"
      required
    />
    <span className="absolute left-3 top-1 text-xs text-orange-300">Time</span>
  </div>
</div>



        <button
          type="submit"
          className="w-40 py-2 m1-auto block rounded-lg bg-gradient-to-r from-[#ff7b54] to-[#ffb347] text-white font-semibold shadow-md hover:opacity-90 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {success && (
        <p className="text-green-600 text-center font-medium">
          ✅ Submitted successfully! Closing...
        </p>
      )}
      {error && <p className="text-red-600 text-center font-medium">⚠️ {error}</p>}
    </div>
  );
}
