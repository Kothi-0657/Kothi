"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Requirement Received",
    description: "Received requirement from client",
  },
  {
    title: "Inspection Scheduled",
    description: "Inspection scheduled and completed at client convenience",
  },
  {
    title: "Quotation / Inspection Report",
    description:
      "All inspection reports consolidated and quotation generated based on client requirements",
  },
  {
    title: "Quote Approved",
    description: "Client approved the order",
  },
  {
    title: "Work Assessment",
    description: "Detailed planning and task assessment completed",
  },
  {
    title: "Project Delivery",
    description: "On-time project delivery with quality assurance",
  },
];

export default function WorkflowTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // normal step progression
    if (activeStep < steps.length - 1) {
      timer = setTimeout(() => {
        setActiveStep((prev) => prev + 1);
      }, 1600);
    }

    // pause after last step, then restart
    if (activeStep === steps.length - 1) {
      timer = setTimeout(() => {
        setActiveStep(0);
      }, 7000); // ⏸ wait 7 seconds before restarting
    }

    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      {/* TIMELINE */}
      <div className="relative flex justify-between items-start">
        {/* base line */}
        <div className="absolute top-2 left-0 w-full h-[1px] bg-white/20" />

        {/* animated line */}
        <motion.div
          className="absolute top-2 left-0 h-[1px] bg-[#b04400]"
          initial={{ width: 0 }}
          animate={{
            width: `${(activeStep / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* STEPS */}
        {steps.map((step, index) => {
          const isVisible = index <= activeStep;
          const isActive = index === activeStep;

          return (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center w-[180px]"
            >
              {/* DOT */}
              <motion.div
                className={`w-3 h-3 rounded-full ${
                  isVisible ? "bg-[#b04400]" : "bg-white/30"
                }`}
                animate={{ scale: isActive ? 1.4 : 1 }}
                transition={{ type: "spring", stiffness: 260 }}
              />

              {/* TEXT CARD */}
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="
                    mt-4 px-3 py-2 rounded-lg
                    backdrop-blur-md bg-white/60
                    shadow-sm border border-white/40
                    text-center
                  "
                >
                  <h3 className="text-[11px] font-semibold text-gray-900 mb-0.5">
                    {step.title}
                  </h3>
                  <p className="text-[10px] text-gray-700 leading-snug">
                    {step.description}
                  </p>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
