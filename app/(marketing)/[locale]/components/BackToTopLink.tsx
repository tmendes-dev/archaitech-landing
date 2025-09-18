"use client";
import React from "react";

export default function BackToTopLink() {
  return (
    <a
      href="#top"
      onClick={e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none transition-colors text-xs font-semibold shadow"
      aria-label="Back to top"
    >
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M12 19V5m0 0l-7 7m7-7l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      Back to top
    </a>
  );
}
