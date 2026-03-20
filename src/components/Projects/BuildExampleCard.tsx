"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

const ArrowIcon = () => (
  <svg
    className="ml-1 h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const BuildExampleCard = ({ project }: { project: Project }) => {
  const { title, description, tags, link, linkLabel, image } = project;

  const card = (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-stroke-stroke/60 bg-white shadow-one transition-all duration-300 hover:border-primary/15 hover:shadow-[0_20px_50px_-12px_rgba(61,107,133,0.15)] dark:border-stroke-dark/60 dark:bg-[#0c0c0d] dark:hover:border-primary/25 dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]">
      {image ? (
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#f0f0f0] dark:bg-[#1a1a1d]">
          <Image
            src={image}
            alt={`Vista previa: ${title}`}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-display text-xl font-normal tracking-tight text-black dark:text-white">
          {title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-primary/8 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-primary dark:bg-primary/15 dark:text-primary-light"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center text-xs font-medium text-primary transition-transform group-hover:translate-x-0.5 dark:text-primary-light">
            {linkLabel ?? "Ver proyecto"}
            <ArrowIcon />
          </span>
        </div>
      </div>
    </article>
  );

  return (
    <div className="group w-full">
      {link ? (
        <Link href={link} className="block h-full">
          {card}
        </Link>
      ) : (
        card
      )}
    </div>
  );
};

export default BuildExampleCard;
