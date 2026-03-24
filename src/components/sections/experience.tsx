"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { useFadeIn } from "@/lib/hooks";
import { usePortfolioStore } from "@/store/portfolio";

export function Experience() {
  const { ref, isVisible } = useFadeIn();
  const experiences = usePortfolioStore((s) => s.experiences);

  return (
    <section id="experience" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <SectionHeader title="Experience" subtitle="경력 사항" />
        <div className="relative max-w-2xl mx-auto pl-8 border-l-2 border-gradient">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6c63ff] to-[#00d4aa]" />
          {experiences.map((exp) => (
            <div key={exp.id} className="relative mb-12 last:mb-0">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#6c63ff] border-4 border-[#0f0f1a]" />
              <span className="text-[#00d4aa] text-sm font-semibold">
                {exp.period}
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                {exp.title}
              </h3>
              <p className="text-[#8888a0] leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
