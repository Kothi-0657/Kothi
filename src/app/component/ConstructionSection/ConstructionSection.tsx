"use client";

// Update the import path below to the correct location of ConstructionPage
// Update the import path below to the correct location of ConstructionPage
import ConstructionPage from "../../services/construction/Construction";

export default function ConstructionSection() {
  return (
    <section id="construction" className="py-16 bg-gray-50">
      <ConstructionPage />
    </section>
  );
}
