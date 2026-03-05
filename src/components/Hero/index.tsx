import Link from "next/link";
import Image from "next/image";
import LogoText from "./LogoText";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { lang } = useLanguage();

  const title =
    lang === "en"
      ? (
          <>
            We turn your ideas into{" "}
            <span className="text-primary">successful digital solutions</span>
          </>
        )
      : (
          <>
            Transformamos tus ideas en{" "}
            <span className="text-primary">soluciones digitales</span> exitosas
          </>
        );

  const subtitle =
    lang === "en"
      ? "We specialize in custom web development. From simple landing pages to complex platforms, we create digital experiences that grow your business."
      : "Especialistas en desarrollo web y aplicaciones personalizadas. Desde sitios web informativos hasta plataformas complejas, creamos experiencias digitales que impulsan tu negocio.";

  const primaryCta = lang === "en" ? "Start your project" : "Comienza tu proyecto";
  const secondaryCta =
    lang === "en" ? "See our services" : "Conoce nuestros servicios";
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[#FAFAF9] pb-20 pt-[120px] dark:bg-[#0c0c0d] md:pb-28 md:pt-[140px] xl:pb-36 xl:pt-[160px] 2xl:pb-44 2xl:pt-[180px]"
      >
        {/* Background: dot grid + gradient orbs + one soft shape */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-dot-grid" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-mesh" />
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" />
          <div className="absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full bg-primary/6 blur-3xl dark:bg-primary/8" />
        </div>
        {/* Single elegant curve — adds character without template feel */}
        <div className="pointer-events-none absolute right-0 top-1/2 z-0 w-[min(90vw,420px)] -translate-y-1/2 opacity-40 dark:opacity-30">
          <svg viewBox="0 0 400 300" fill="none" className="h-auto w-full">
            <path
              d="M400 150c-80-60-160-20-200 30-40 50-60 90-80 120-20 30-40 50-120 50"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="text-primary"
            />
            <path
              d="M380 120c-60-40-120 0-160 50"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="text-primary/70"
            />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[720px] text-center">
                <div className="mb-12 flex flex-col items-center justify-center gap-6 text-center md:mb-16 md:flex-row md:gap-10">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-primary/5 blur-xl dark:bg-primary/10" />
                    <Image
                      className="relative block dark:hidden"
                      src="/images/logo/logo-rob.svg"
                      alt="Code Craftz"
                      width={88}
                      height={88}
                    />
                    <Image
                      className="relative hidden dark:block"
                      src="/images/logo/logo-rob-white.svg"
                      alt="Code Craftz"
                      width={88}
                      height={88}
                    />
                  </div>
                  <LogoText />
                </div>
                <h1 className="font-display mb-6 text-4xl font-normal tracking-tight text-black dark:text-white sm:text-5xl md:text-[3.25rem] md:leading-[1.15]">
                  {title}
                </h1>
                <p className="mx-auto mb-14 max-w-2xl text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl md:text-[1.25rem]">
                  {subtitle}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-3.5 text-[15px] font-medium text-white shadow-btn transition-all duration-200 hover:bg-primary-light hover:shadow-btn-hover"
                  >
                    {primaryCta}
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center rounded-2xl border border-stroke-stroke bg-transparent px-8 py-3.5 text-[15px] font-medium text-black transition-colors duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-stroke-dark dark:text-white dark:hover:border-primary dark:hover:bg-primary/10 dark:hover:text-primary-light"
                  >
                    {secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Removed heavy decorative SVGs for a cleaner look */}
        <div className="absolute right-0 top-0 z-[-1] hidden opacity-0">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" />
                <stop offset="1" stopColor="#4584a8" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4584a8" stopOpacity="0" />
                <stop offset="1" stopColor="#4584a8" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4584a8" stopOpacity="0" />
                <stop offset="1" stopColor="#4584a8" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" />
                <stop offset="1" stopColor="#4584a8" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" />
                <stop offset="1" stopColor="#4584a8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] hidden opacity-0">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" stopOpacity="0" />
                <stop offset="1" stopColor="#4584a8" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" stopOpacity="0" />
                <stop offset="1" stopColor="#4584a8" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" stopOpacity="0" />
                <stop offset="1" stopColor="#4584a8" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" stopOpacity="0" />
                <stop offset="1" stopColor="#4584a8" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" />
                <stop offset="1" stopColor="#4584a8" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
