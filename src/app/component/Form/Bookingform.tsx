"use client";

import React, { useEffect, useState } from "react";

const GST_RATE = 18;

const plans = [
  { name: "Basic Home Health Plan", total: 9999 },
  { name: "Combo Home Health Plan", total: 14999 },
  { name: "Damage Protection Plan", total: 24999 },
];

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxCzedjqBfLAyMjpnN6k29SuxRg4UfNxsxZhZInbFKVW4f2CWgXzjowBLwOag6yK-rmPg/exec";
const RAZORPAY_KEY = "rzp_test_SHV7nQ1BZAH41A";

export default function BookingForm() {
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [bhkType, setBhkType] = useState("");
  const [remarks, setRemarks] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const basePrice = Math.round(
    selectedPlan.total / (1 + GST_RATE / 100)
  );
  const gstAmount = selectedPlan.total - basePrice;

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!customerName || !mobile || !email) {
      alert("Please fill required fields");
      return;
    }

    const bookingId = "BOOK-" + Date.now();
    const now = new Date();

    await loadRazorpay();

    const options = {
      key: RAZORPAY_KEY,
      amount: selectedPlan.total * 100,
      currency: "INR",
      name: "Kothi India",
      description: selectedPlan.name,
      handler: async function (response: any) {

        // Save to Google Sheet after payment success
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify({
            action: "saveBooking",
            bookingId,
            customerName,
            email,
            mobile,
            address,
            bhkType,
            remarks,
            selectedPlan: selectedPlan.name,
            basePrice,
            gstAmount,
            totalAmount: selectedPlan.total,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            paymentStatus: "Paid",
            bookingDate: now.toLocaleDateString(),
            timestamp: now.toISOString(),
          }),
        });

        alert("Payment Successful ✅ Booking Confirmed");
      },
      prefill: {
        name: customerName,
        email: email,
        contact: mobile,
      },
      theme: {
        color: "#f97316",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-6">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl w-full max-w-xl space-y-6">

        <h2 className="text-3xl font-bold text-orange-400 text-center">
          Book Annual Inspection
        </h2>

        <input
          placeholder="Customer Name"
          className="w-full p-3 rounded bg-white/20"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <input
          placeholder="Email ID"
          className="w-full p-3 rounded bg-white/20"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Mobile Number"
          className="w-full p-3 rounded bg-white/20"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <textarea
          placeholder="Property Address"
          className="w-full p-3 rounded bg-white/20"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <select
          className="w-full p-3 rounded bg-white/20"
          value={selectedPlan.name}
          onChange={(e) =>
            setSelectedPlan(
              plans.find((p) => p.name === e.target.value)!
            )
          }
        >
          {plans.map((plan) => (
            <option key={plan.name} value={plan.name}>
              {plan.name}
            </option>
          ))}
        </select>

        <select
          className="w-full p-3 rounded bg-white/20"
          value={bhkType}
          onChange={(e) => setBhkType(e.target.value)}
        >
          <option value="">Select BHK Type</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>4 BHK</option>
          <option>Villa</option>
        </select>

        <textarea
          placeholder="Remarks"
          className="w-full p-3 rounded bg-white/20"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />

        {/* Price Breakdown */}
        <div className="bg-black/40 p-4 rounded-xl text-sm space-y-1">
          <p>Base Price: ₹{basePrice}</p>
          <p>GST (18%): ₹{gstAmount}</p>
          <p className="font-bold text-lg text-orange-400">
            Total: ₹{selectedPlan.total}
          </p>
        </div>

        <button
          onClick={handlePayment}
          className="w-full py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold text-lg hover:scale-105 transition"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}
