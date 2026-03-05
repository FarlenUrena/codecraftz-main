import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="group w-full">
      <div className="flex h-full w-full flex-col items-center rounded-2xl border border-stroke-stroke/80 bg-white/80 p-8 text-center shadow-one backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-two dark:border-stroke-dark/80 dark:bg-[#0c0c0d]/80 dark:hover:border-primary/30">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15 dark:bg-primary/15 dark:group-hover:bg-primary/20">
          {icon}
        </div>
        <h3 className="mb-3 text-lg font-semibold tracking-tight text-black dark:text-white sm:text-xl">
          {title}
        </h3>
        <p className="max-w-[300px] text-base leading-relaxed text-body-color dark:text-body-color-dark">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
