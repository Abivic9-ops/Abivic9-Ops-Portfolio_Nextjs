import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { ProjectsOverview } from "@/components/sections/projects-overview";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { Experience } from "@/components/sections/experience";
import { WhatIBring } from "@/components/sections/what-i-bring";
import { WorkTogetherCTA } from "@/components/sections/work-together-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProjectsOverview />
      <SkillsPreview />
      <Experience />
      <WhatIBring />
      <WorkTogetherCTA />
    </>
  );
}
