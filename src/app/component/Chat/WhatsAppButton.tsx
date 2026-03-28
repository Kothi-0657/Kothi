"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // 👈 ADD HERE

const WhatsAppButton = () => {
  const phoneNumber = "919972225551";
  const message = "Hi, I want to enquire about your services";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
    >
      <FaWhatsapp size={24} />  {/* 👈 USE HERE */}
    </a>
  );
};

export default WhatsAppButton;