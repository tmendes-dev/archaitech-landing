import React from "react";

export default function StickyCTA() {
  return (
    <a
      href="#contact"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg hover:from-blue-700 hover:to-cyan-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none transition-all text-base block md:hidden"
      style={{ minWidth: 200, textAlign: "center" }}
    >
      Contact ArchAItechs
    </a>
  );
}
