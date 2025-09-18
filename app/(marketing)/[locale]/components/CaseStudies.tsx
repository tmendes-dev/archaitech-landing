"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import HoverLift from "./HoverLift";
import SectionSkeleton from "./SectionSkeleton";
import Spinner from "./Spinner";

type CaseStudy = { title: string; challenge: string; solution: string; result: string };

interface CaseStudiesProps {
  title: string;
  subtitle: string;
  empty: string;
  challengeLabel: string;
  solutionLabel: string;
  resultLabel: string;
  items: CaseStudy[];
}

export default function CaseStudies({
  title,
  subtitle,
  empty,
  challengeLabel,
  solutionLabel,
  resultLabel,
  items,
}: CaseStudiesProps) {
  const [start, setStart] = useState(0);
  const visible = 1;
  const total = items?.length || 0;

  // Wrap-around carousel logic
  const getVisibleItems = () => {
    if (!items || total === 0) return [];
    if (total <= visible) return items;
    let arr = [];
    for (let i = 0; i < visible; i++) {
      arr.push(items[(start + i) % total]);
    }
    return arr;
  };

  const handlePrev = () => setStart((prev) => (prev - 1 + total) % total);
  const handleNext = () => setStart((prev) => (prev + 1) % total);

  return (
    <section id="cases" className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white text-center">{title}</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300 text-lg text-center">{subtitle}</p>

      <div className="mt-10 flex items-center gap-4 justify-center">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="rounded-full bg-slate-200 dark:bg-slate-800 p-3 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none transition-colors text-2xl"
        >
          &#8592;
        </button>
        <div className="flex-1 max-w-2xl">
          {items === undefined || items === null ? (
            <div className="flex justify-center items-center h-40"><Spinner /></div>
          ) : getVisibleItems().length ? getVisibleItems().map((c, i) => (
            <FadeIn key={i + start} delay={0.1}>
              <HoverLift>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow h-full">
                  <h3 className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-6 text-center">{c.title}</h3>
                  <div className="space-y-6 text-base">
                    <div>
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 uppercase tracking-wide">{challengeLabel}</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 uppercase tracking-wide">{solutionLabel}</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 uppercase tracking-wide">{resultLabel}</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>
              </HoverLift>
            </FadeIn>
          )) : (
            <p className="text-slate-500 dark:text-slate-400 col-span-full text-center py-8">{empty}</p>
          )}
        </div>
        <button
          aria-label="Next"
          onClick={handleNext}
          className="rounded-full bg-slate-200 dark:bg-slate-800 p-3 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none transition-colors text-2xl"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
