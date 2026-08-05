"use client";
import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type ProjectSection from "./ProjectSection";

const ProjectSectionLazy = dynamic(() => import("./ProjectSection"), {
  ssr: false,
  loading: () => (
    <section className="py-24 md:py-40 px-6 md:px-16 bg-cream">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-11 items-center">
        <div className="aspect-[3/4] max-h-[680px] bg-charcoal-100 animate-pulse" />
        <div className="space-y-4">
          <div className="h-3 bg-charcoal-100 rounded animate-pulse w-1/3" />
          <div className="h-10 bg-charcoal-100 rounded animate-pulse" />
          <div className="h-4 bg-charcoal-100 rounded animate-pulse w-2/3" />
        </div>
      </div>
    </section>
  ),
});

type Props = ComponentProps<typeof ProjectSection>;
export default function ProjectSectionWrapper(props: Props) {
  return <ProjectSectionLazy {...props} />;
}
