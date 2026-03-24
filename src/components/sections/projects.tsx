"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { useFadeIn } from "@/lib/hooks";
import { usePortfolioStore } from "@/store/portfolio";

export function Projects() {
  const { ref, isVisible } = useFadeIn();
  const projects = usePortfolioStore((s) => s.projects);

  return (
    <section id="projects" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <SectionHeader title="Projects" subtitle="프로젝트" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card key={project.id} className="overflow-hidden">
              <div
                className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-5xl font-bold text-white/80">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <CardContent className="pt-5">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#8888a0] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
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
