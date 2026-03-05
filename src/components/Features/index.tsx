"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Features = () => {
  const { lang } = useLanguage();
  const t = translations[lang].features;

  return (
    <section id="features" className="bg-dot-grid bg-white py-20 dark:bg-[#0f0f11] md:py-24 lg:py-32">
      <div className="container">
        <SectionTitle title={t.title} paragraph={t.paragraph} center />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <SingleFeature
              key={feature.id}
              feature={{
                ...feature,
                title: t.items[index]?.title ?? feature.title,
                paragraph: t.items[index]?.paragraph ?? feature.paragraph,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
