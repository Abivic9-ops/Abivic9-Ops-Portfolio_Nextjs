import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { ProjectsOverview } from "@/components/sections/projects-overview";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { Experience } from "@/components/sections/experience";

import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProjectsOverview />
      <SkillsPreview />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}
