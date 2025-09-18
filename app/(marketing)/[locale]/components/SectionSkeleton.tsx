import React from "react";

export default function SectionSkeleton({ className = "", style = {} }) {
  return (
    <div
      className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded-2xl w-full h-40 sm:h-56 my-8 ${className}`}
      style={style}
      aria-busy="true"
      aria-label="Loading section"
    />
  );
}
