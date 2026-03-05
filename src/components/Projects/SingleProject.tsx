"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";

const SingleProject = ({ project }: { project: Project }) => {
  const { title, description, image, tags, link, linkLabel } = project;

  const articleContent = (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-stroke-stroke/60 bg-white shadow-one transition-all duration-300 hover:border-primary/15 hover:shadow-[0_20px_50px_-12px_rgba(61,107,133,0.15)] dark:border-stroke-dark/60 dark:bg-[#0c0c0d] dark:hover:border-primary/25 dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]">
          {/* Preview frame — browser-style */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f5f6f8] dark:bg-[#161619]">
            {/* Top bar (mockup chrome) */}
            <div className="absolute left-0 right-0 top-0 z-10 flex items-center gap-2 border-b border-black/5 bg-white/80 px-3 py-2 backdrop-blur-sm dark:border-white/5 dark:bg-[#1e1e22]/90">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>

            {/* Image or elegant placeholder */}
            <div className="absolute inset-0 pt-9">
              {image ? (
                <>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top transition-all duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#e8ecf0] to-[#f0f2f5] p-6 dark:from-[#1a1b1f] dark:to-[#141518]">
                  {/* Minimal wireframe preview */}
                  <div className="w-full max-w-[200px] space-y-3">
                    <div className="h-2 w-3/4 rounded-full bg-primary/20 dark:bg-primary/25" />
                    <div className="h-2 w-full rounded-full bg-primary/15 dark:bg-primary/20" />
                    <div className="h-2 w-4/5 rounded-full bg-primary/10 dark:bg-primary/15" />
                    <div className="mt-4 flex gap-2">
                      <div className="h-8 flex-1 rounded-lg bg-primary/15 dark:bg-primary/20" />
                      <div className="h-8 w-16 rounded-lg bg-primary/20 dark:bg-primary/25" />
                    </div>
                  </div>
                  <span className="mt-4 text-[10px] font-medium uppercase tracking-widest text-primary/40 dark:text-primary/50">
                    Preview
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
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
              </span>
            </div>
          </div>
    </article>
  );

  return (
    <div className="group w-full">
      {link ? (
        <Link href={link} className="block h-full">
          {articleContent}
        </Link>
      ) : (
        <div className="block h-full">{articleContent}</div>
      )}
    </div>
  );
};

export default SingleProject;
