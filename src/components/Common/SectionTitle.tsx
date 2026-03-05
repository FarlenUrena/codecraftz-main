const SectionTitle = ({
  title,
  paragraph,
  width = "560px",
  center,
  mb = "80px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      {center && (
        <span className="mb-4 inline-block h-0.5 w-12 rounded-full bg-primary/60 dark:bg-primary/50" aria-hidden />
      )}
      <h2 className="font-display mb-4 text-3xl font-normal tracking-tight text-black dark:text-white sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
