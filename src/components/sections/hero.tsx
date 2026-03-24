"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-6 bg-[radial-gradient(ellipse_at_center,_rgba(108,99,255,0.15)_0%,_transparent_70%)]"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I&apos;m <span className="text-[#6c63ff]">Junkyung</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#00d4aa] font-semibold mb-6">
          Frontend Developer
        </p>
        <p className="text-[#8888a0] max-w-xl mx-auto mb-10 leading-relaxed">
          Interactive하고 접근성 높은 사용자 인터페이스를 만드는 것을 좋아하는
          프론트엔드 개발자입니다. 복잡한 문제를 우아하고 유지보수하기 쉬운
          코드로 풀어냅니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </Button>
          <a
            href="https://github.com/jkoon90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="w-full">
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
