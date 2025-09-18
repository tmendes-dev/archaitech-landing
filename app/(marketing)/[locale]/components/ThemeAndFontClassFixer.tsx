"use client";
import { useEffect } from "react";

export default function ThemeAndFontClassFixer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Set dark mode class on html element based on localStorage or system preference
    try {
      const t = localStorage.getItem("theme");
      const d = t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (d) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch {}
  }, []);
  return <>{children}</>;
}
