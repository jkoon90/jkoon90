import { create } from "zustand";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

export interface Experience {
  id: string;
  title: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

interface PortfolioState {
  projects: Project[];
  experiences: Experience[];
  skillCategories: SkillCategory[];
}

export const usePortfolioStore = create<PortfolioState>(() => ({
  projects: [
    {
      id: "1",
      title: "Project One",
      description:
        "React와 TypeScript를 활용한 웹 애플리케이션 프로젝트입니다. 내용을 자유롭게 수정해 주세요.",
      tags: ["React", "TypeScript", "Next.js"],
      gradient: "from-[#6c63ff] to-[#00d4aa]",
    },
    {
      id: "2",
      title: "Project Two",
      description:
        "상태 관리와 API 연동을 중심으로 한 프로젝트입니다. 내용을 자유롭게 수정해 주세요.",
      tags: ["Redux", "React Query", "REST API"],
      gradient: "from-[#00d4aa] to-[#6c63ff]",
    },
    {
      id: "3",
      title: "Project Three",
      description:
        "UI/UX에 집중한 반응형 웹 프로젝트입니다. 내용을 자유롭게 수정해 주세요.",
      tags: ["Tailwind CSS", "Styled-components"],
      gradient: "from-[#ff6b6b] to-[#6c63ff]",
    },
  ],
  experiences: [
    {
      id: "1",
      title: "Frontend Developer",
      period: "현재",
      description:
        "React, TypeScript 기반의 웹 애플리케이션 개발. 퍼포먼스 최적화 및 사용자 경험 개선에 집중.",
    },
    {
      id: "2",
      title: "Web Developer",
      period: "이전 경력",
      description:
        "JavaScript를 활용한 인터랙티브 웹 서비스 구축. 다양한 프론트엔드 프레임워크 경험 축적.",
    },
  ],
  skillCategories: [
    { id: "1", title: "Languages", skills: ["TypeScript", "JavaScript"] },
    {
      id: "2",
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Redux",
        "React Query",
        "Tailwind CSS",
        "Styled-components",
      ],
    },
    {
      id: "3",
      title: "State Management",
      skills: ["Redux Thunk", "Redux Saga", "React Query"],
    },
    { id: "4", title: "Tools", skills: ["Git", "VS Code", "GitHub"] },
  ],
}));
