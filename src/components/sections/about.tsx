"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { useFadeIn } from "@/lib/hooks";

const info = [
  { label: "Name", value: "Junkyung" },
  { label: "Role", value: "Frontend Developer" },
  { label: "GitHub", value: "jkoon90" },
  { label: "Focus", value: "React, TypeScript" },
];

export function About() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <SectionHeader title="About Me" subtitle="개발자 소개" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-[#e0e0e0] leading-relaxed space-y-4">
            <p>
              안녕하세요! 저는 프론트엔드 개발자 Junkyung입니다. TypeScript와
              JavaScript를 기반으로 React, Next.js 생태계에서 퍼포먼스 높고
              아름다운 웹 애플리케이션을 만들고 있습니다.
            </p>
            <p>
              깔끔하고 확장 가능한 코드, 직관적인 사용자 경험에 집중하며, 항상
              새로운 프론트엔드 기술을 탐구하고 배우고 있습니다.
            </p>
          </div>
          <div className="space-y-4">
            {info.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 py-3 border-b border-white/5"
              >
                <span className="text-[#6c63ff] font-semibold min-w-[80px]">
                  {item.label}
                </span>
                <span className="text-[#e0e0e0]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
