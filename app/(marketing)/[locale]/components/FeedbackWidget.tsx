
"use client";
import { useState, useEffect, useRef } from "react";

export default function FeedbackWidget() {
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (closed) return;
    const contact = document.getElementById("contact");
    if (!contact) return;
    observerRef.current?.disconnect();
    observerRef.current = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observerRef.current.observe(contact);
    return () => observerRef.current?.disconnect();
  }, [closed]);

  if (!visible || closed) return null;

  if (submitted) {
    return (
      <div className="fixed bottom-4 left-4 z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-4 text-sm flex items-center gap-2">
        <span className="font-semibold text-green-600">Thank you for your feedback!</span>
        <button
          type="button"
          aria-label="Close feedback popup"
          className="ml-auto text-slate-400 hover:text-slate-700 dark:hover:text-white rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none"
          onClick={() => setClosed(true)}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 8M6 14L14 6"/></svg>
        </button>
      </div>
    );
  }

  return (
    <form
      className="fixed bottom-4 left-4 z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-4 flex flex-col gap-2 w-72"
      onSubmit={e => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would send the feedback to your backend or service
      }}
    >
      <div className="flex items-center justify-between">
        <label htmlFor="feedback" className="font-semibold text-slate-700 dark:text-slate-200 text-sm">Was this page helpful?</label>
        <button
          type="button"
          aria-label="Close feedback popup"
          className="text-slate-400 hover:text-slate-700 dark:hover:text-white rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none"
          onClick={() => setClosed(true)}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 8M6 14L14 6"/></svg>
        </button>
      </div>
      <textarea
        id="feedback"
        className="rounded border border-slate-300 dark:border-slate-700 p-2 text-sm resize-none focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none"
        rows={2}
        placeholder="Let us know what could be improved..."
        value={value}
        onChange={e => setValue(e.target.value)}
        required
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 text-white px-3 py-1.5 text-sm font-semibold hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none transition-colors"
      >
        Send Feedback
      </button>
    </form>
  );
}
