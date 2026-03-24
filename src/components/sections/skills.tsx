"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { useFadeIn } from "@/lib/hooks";
import { usePortfolioStore } from "@/store/portfolio";

export function Skills() {
  const { ref, isVisible } = useFadeIn();
  const skillCategories = usePortfolioStore((s) => s.skillCategories);

  return (
    <section id="skills" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <SectionHeader title="Skills" subtitle="기술 스택" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <Card key={cat.id}>
              <CardHeader>
                <h3 className="text-[#00d4aa] font-bold text-lg">
                  {cat.title}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
