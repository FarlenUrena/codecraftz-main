"use client";

import SectionTitle from "../Common/SectionTitle";
import BuildExampleCard from "./BuildExampleCard";
import projectsData from "./projectsData";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Projects = () => {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <section
      id="projects"
      className="relative bg-dot-grid bg-[#FAFAF9] py-20 dark:bg-[#0c0c0d] md:py-24 lg:py-32"
    >
      <div className="container">
        <SectionTitle title={t.title} paragraph={t.paragraph} center />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <BuildExampleCard
              key={project.id}
              project={{
                ...project,
                title: t.items[index]?.title ?? project.title,
                description: t.items[index]?.description ?? project.description,
                linkLabel: t.items[index]?.linkLabel ?? project.linkLabel,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
