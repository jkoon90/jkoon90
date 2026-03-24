"use client";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { useFadeIn } from "@/lib/hooks";
import { GitBranch } from "lucide-react";

export function Contact() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="contact" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <SectionHeader title="Contact" subtitle="연락처" />
        <p className="text-[#8888a0] max-w-lg mx-auto mb-10 leading-relaxed">
          프로젝트 협업이나 기회에 대해 이야기 나누고 싶다면 편하게 연락 주세요!
        </p>
        <a
          href="https://github.com/jkoon90"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="lg">
            <GitBranch className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </a>
      </div>
    </section>
  );
}
