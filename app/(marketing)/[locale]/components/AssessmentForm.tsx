"use client";
import { useState } from "react";

function Toast({ show, message }: { show: boolean; message: string }) {
  if (!show) return null;
  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold animate-fade-in">
      {message}
    </div>
  );
}

export default function AssessmentForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [challenge, setChallenge] = useState("");
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const mailSubject = encodeURIComponent("Assessment Request from " + name);
  const mailBody = encodeURIComponent(
    `Name: ${name}\nCompany: ${company}\nEmail: ${emailValue}\nChallenge: ${challenge}\n`
  );

  const mailto = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;

  function handleCopy() {
    const text = `Assessment Request\n\nName: ${name}\nCompany: ${company}\nEmail: ${emailValue}\nChallenge: ${challenge}`;
    navigator.clipboard.writeText(text).then(() => setCopied(true));
    setTimeout(() => setCopied(false), 2000);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open(mailto, '_blank');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  }

  return (
  <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Name</label>
        <input type="text" className="w-full rounded border border-slate-300 dark:border-slate-700 p-2 text-sm bg-white dark:bg-slate-900" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Company</label>
        <input type="text" className="w-full rounded border border-slate-300 dark:border-slate-700 p-2 text-sm bg-white dark:bg-slate-900" value={company} onChange={e => setCompany(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Email</label>
        <input type="email" className="w-full rounded border border-slate-300 dark:border-slate-700 p-2 text-sm bg-white dark:bg-slate-900" value={emailValue} onChange={e => setEmailValue(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Challenge</label>
        <textarea className="w-full rounded border border-slate-300 dark:border-slate-700 p-2 text-sm bg-white dark:bg-slate-900" rows={3} value={challenge} onChange={e => setChallenge(e.target.value)} required />
      </div>
      <div className="flex gap-2">
        <button type="submit" className="rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none transition-colors">Send Assessment Request</button>
        <button type="button" onClick={handleCopy} className="rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-100 px-4 py-2 text-sm font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none transition-colors">
          {copied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
      <Toast show={showToast} message="Assessment request ready to send!" />
    </form>
  );
}
