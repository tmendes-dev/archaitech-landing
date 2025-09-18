import React from "react";

export default function Spinner({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-block animate-spin text-blue-600 dark:text-blue-400 ${className}`} role="status" aria-label="Loading">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
    </span>
  );
}
