"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";

type ContactFormProps = {
  onSuccess?: () => void;
  onClose?: () => void;
};

export default function LuxuryCustomerForm({
  onSuccess,
  onClose,
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Validation
  const validateForm = (formData: FormData): string | null => {
    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const service = formData.get("service")?.toString().trim() || "";
    const requirements = formData.get("requirements")?.toString().trim() || "";
    const date = formData.get("visitDate")?.toString().trim() || "";
    const time = formData.get("visitTime")?.toString().trim() || "";

    if (name.length < 3) return "Name must be at least 3 characters long.";
    if (!/^\d{10}$/.test(phone))
      return "Phone number must be exactly 10 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address.";
    if (!service) return "Please select a service request.";
    if (requirements.length < 10)
      return "Requirements should be at least 10 characters.";
    if (!date || !time)
      return "Please select your preferred call-back date and time.";

    return null;
  };

  // 🔹 Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbx6U95x3J-L-OGiEToDaxikvNLZR8guDMoSmZ7AOwGSPA-TXTCw3g0dNSFpGIx7yHEWAQ/exec",
        { method: "POST", body: formData }
      );

      const result = JSON.parse(await res.text());

      if (result.status === "success") {
        setSuccess(true);
        form.reset();
        setTimeout(() => {
          setSuccess(false);
          onSuccess?.();
        }, 2500);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full py-6">
      {/* 🌟 GLASS CONTAINER */}
      <div className="relative w-[370px] bg-white/40 backdrop-blur-xl border border-white/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] px-5 py-6">
        {/* Close */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
          >
            <FaTimes size={14} />
          </button>
        )}

        {/* Title */}
        <h2 className="text-center text-xl font-semibold text-gray-900 tracking-wide">
          Client Service Request
        </h2>
        <p className="text-center text-xs text-gray-600 mt-1 mb-4">
          Tell us about your requirement
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Inputs */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="lux-input"
          />
          <input
            type="tel"
            name="phone"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="10-digit Mobile Number"
            required
            className="lux-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="lux-input"
          />

          {/* Service */}
          <select name="service" required className="lux-input">
            <option value="">Select a Service</option>
            <option value="Home Inspections">Home Inspections</option>
            <option value="Home Renovations">Home Renovations</option>
            <option value="Home Interior">Home Interior</option>
            <option value="Home Constructions">Home Constructions</option>
            <option value="Packers and Movers">Packers and Movers</option>
            <option value="Vendor Onboarding">Vendor Onboarding</option>
          </select>

          {/* Requirements */}
          <textarea
            name="requirements"
            rows={3}
            required
            placeholder="Describe your requirement in detail"
            className="lux-input resize-none"
          />

          {/* 📅 Date & Time */}
          <div>
            <label className="block text-xs text-gray-700 mb-1">
              Preferred Call Back Date & Time
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="date"
                name="visitDate"
                required
                className="lux-input"
              />
              <input
                type="time"
                name="visitTime"
                required
                className="lux-input"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-2 py-2 rounded-xl text-sm font-semibold text-white
              bg-gradient-to-r from-[#C67C3D] to-[#E2B857] shadow-lg transition
              ${loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}`}
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>

        {/* Messages */}
        {success && (
          <p aria-live="polite" className="text-green-600 text-center text-sm mt-3">
            ✅ Request submitted successfully
          </p>
        )}
        {error && (
          <p aria-live="polite" className="text-red-600 text-center text-sm mt-3">
            ⚠️ {error}
          </p>
        )}
      </div>

      {/* 🔥 Custom Input Style */}
      <style jsx>{`
        .lux-input {
          width: 100%;
          padding: 10px 12px;
          font-size: 14px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.75);
          outline: none;
          transition: all 0.25s ease;
        }
        .lux-input:focus {
          border-color: #c67c3d;
          box-shadow: 0 0 0 2px rgba(198, 124, 61, 0.25);
          background: #fff;
        }
      `}</style>
    </div>
  );
}
