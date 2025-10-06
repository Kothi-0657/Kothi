"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // ✅ Import Close Icon

type ContactFormProps = {
  onSuccess?: () => void;
  onClose?: () => void; // ✅ Add onClose prop to trigger modal close
};

export default function LuxuryCustomerForm({ onSuccess, onClose }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ Form Validation
  const validateForm = (formData: FormData): string | null => {
    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const service = formData.get("service")?.toString().trim() || "";
    const requirements = formData.get("requirements")?.toString().trim() || "";
    const date = formData.get("visitDate")?.toString().trim() || "";
    const time = formData.get("visitTime")?.toString().trim() || "";

    if (name.length < 3) return "Name must be at least 3 characters long.";
    if (!/^\d{10}$/.test(phone)) return "Phone number must be exactly 10 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
    if (!service) return "Please select a service request.";
    if (requirements.length < 10) return "Requirements should be at least 10 characters.";
    if (!date || !time) return "Please select your preferred call-back date and time.";

    return null;
  };

  // ✅ Handle Form Submit
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
        "https://script.google.com/macros/s/AKfycbzeiioJCMVet6mR3MK5fz2pe3H1r6hcQCceRDw0k_HRhfgdscTeSVhKv0PpJHxYYtzGFw/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const text = await res.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Invalid server response");
      }

      if (result.status === "success") {
        setSuccess(true);
        form.reset();
        setTimeout(() => {
          setSuccess(false);
          if (onSuccess) onSuccess();
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
    <div className="relative max-w-lg mx-auto p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl space-y-6">
      {/* ✅ Close Button (Top-Right Corner) */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>
      )}

      {/* Form Heading */}
      <h2 className="text-3xl font-semibold text-center text-gray-800">
        Client Form
      </h2>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (10 digits)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          pattern="[0-9]{10}"
          title="Phone number must be 10 digits"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        />

        {/* Service Request */}
        <select
          name="service"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 bg-white"
          required
        >
          <option value="">Select a Service Request</option>
          <option value="Home Inspections">Home Inspections</option>
          <option value="Home Renovations">Home Renovations</option>
          <option value="Home Interior">Home Interior</option>
          <option value="Home Constructions">Home Constructions</option>
          <option value="Packers and Movers">Packers and Movers</option>
          <option value="Vendor Onboarding">Vendor Onboarding</option>
        </select>

        {/* Requirement */}
        <textarea
          name="requirements"
          placeholder="Describe your requirement or service need in detail"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          rows={4}
          required
        />

        {/* Preferred Callback Date & Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preferred Call Back Date & Time
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="visitDate"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="time"
              name="visitTime"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>

      {/* ✅ Messages */}
      {success && (
        <p className="text-green-600 text-center font-medium">
          ✅ Thank you! Your request has been received.
        </p>
      )}
      {error && (
        <p className="text-red-600 text-center font-medium">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}
