"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  pricingOptions,
  BASE_PRICE,
  DOWN_PAYMENT_PERCENT,
  DOWN_PAYMENT_MIN,
  INSTALLMENT_MONTHS,
} from "./pricingOptions";
import { categoryLabels } from "./pricingOptions";
import type { PricingOption } from "@/types/pricingOption";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Prices = ({
  onDefaultMessageChange,
}: {
  onDefaultMessageChange?: (message: string) => void;
}) => {
  const { lang } = useLanguage();
  const t = translations[lang].prices;
  const categoryLabelsTranslated = t.categories;
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    // Always included options
    new Set(["seo-basico", "diseno"])
  );
  const [projectContext, setProjectContext] = useState("");
  const router = useRouter();

  const total = useMemo(() => {
    let sum = BASE_PRICE;
    selectedIds.forEach((id) => {
      const opt = pricingOptions.find((o) => o.id === id);
      if (opt) sum += opt.price;
    });
    return sum;
  }, [selectedIds]);

  const totalOneTime = total;

  const paymentPlan = useMemo(() => {
    if (totalOneTime <= 0) return null;
    const initial = Math.max(
      DOWN_PAYMENT_MIN,
      Math.round((totalOneTime * DOWN_PAYMENT_PERCENT) / 100)
    );
    const remaining = totalOneTime - initial;
    if (remaining <= 0) return null;
    const monthly = Math.ceil(remaining / INSTALLMENT_MONTHS);
    return { initial, monthly, months: INSTALLMENT_MONTHS };
  }, [totalOneTime]);

  const paymentPlanStrings = useMemo(() => ({
    title: (t as { paymentPlanTitle?: string }).paymentPlanTitle ?? "O paga en cuotas",
    now: (t as { paymentPlanNow?: string }).paymentPlanNow ?? "ahora",
    forMonths: (t as { paymentPlanFor?: string }).paymentPlanFor ?? "durante",
    months: (t as { paymentPlanMonths?: string }).paymentPlanMonths ?? "meses",
  }), [t]);

  const selectedOptions = useMemo(
    () => pricingOptions.filter((o) => selectedIds.has(o.id)),
    [selectedIds]
  );

  const toggle = (id: string) => {
    if (id === "seo-basico" || id === "diseno") return; // Siempre incluido, no se puede quitar
    const opt = pricingOptions.find((o) => o.id === id);
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        return next;
      }
      if (opt?.group) {
        pricingOptions
          .filter((o) => o.group === opt.group && o.id !== id)
          .forEach((o) => next.delete(o.id));
      }
      next.add(id);
      // Catálogo administrable incluye base de datos
      if (id === "catalogo-admin") next.add("base-datos");
      return next;
    });
  };

  const getOptionLabel = (opt: PricingOption) =>
    lang === "en" && "optionLabels" in t && typeof t.optionLabels === "object" && opt.id in t.optionLabels
      ? (t.optionLabels as Record<string, string>)[opt.id]
      : opt.label;
  const getOptionDescription = (opt: PricingOption) =>
    lang === "en" && "optionDescriptions" in t && typeof t.optionDescriptions === "object" && opt.id in t.optionDescriptions
      ? (t.optionDescriptions as Record<string, string>)[opt.id]
      : opt.description ?? "";

  const handleRequestQuote = () => {
    const intro =
      lang === "en"
        ? "Hi, I'm interested in a quote with the following configuration:"
        : "Hola, me interesa solicitar un presupuesto con la siguiente configuración:";
    const contextLabel =
      lang === "en" ? "Context / My project or business:" : "Contexto / Mi proyecto o negocio:";
    const totalLine =
      lang === "en"
        ? "Estimated total: $" + total + ". Can we talk to refine details?"
        : "Total estimado: $" + total + ". ¿Podemos conversar para afinar detalles?";
    const baseLabel = lang === "en" ? "Base (website)" : "Base (sitio web)";
    const contextBlock = projectContext.trim()
      ? contextLabel + "\n" + projectContext.trim()
      : "";
    const lines = [
      intro,
      "",
      ...(contextBlock ? [contextBlock, ""] : []),
      ...(BASE_PRICE > 0 ? ["• " + baseLabel + ": $" + BASE_PRICE] : []),
      ...selectedOptions.map((o) =>
        "• " + getOptionLabel(o) + ": +$" + o.price
      ),
      "",
      totalLine,
    ];
    const message = lines.join("\n");
    onDefaultMessageChange?.(message);
    router.push("#contact");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const byCategory = useMemo(() => {
    const map = new Map<PricingOption["category"], PricingOption[]>();
    pricingOptions.forEach((opt) => {
      const list = map.get(opt.category) ?? [];
      list.push(opt);
      map.set(opt.category, list);
    });
    return map;
  }, []);

  const categories: PricingOption["category"][] = [
    "pagina",
    "dominio",
    "extras",
  ];

  return (
    <section
      id="prices"
      className="relative flex flex-col items-center bg-white py-20 text-black dark:bg-[#0f0f11] dark:text-white md:py-24 lg:py-32"
    >
      <div
        className="bg-dot-grid absolute inset-0 z-0 opacity-60 dark:opacity-25"
        aria-hidden
      />
      <div className="container relative z-10 mx-auto px-5 py-12">
        <div className="relative mb-12 flex w-full flex-col text-center md:mb-16">
          {(t as { promoLabel?: string }).promoLabel && (
            <div
              className="absolute -top-0.5 right-0 flex origin-top-right sm:right-2 md:right-4"
              style={{ transform: "rotate(6deg)" }}
            >
              <div className="relative overflow-hidden rounded-sm bg-red-600 px-4 py-2 shadow-lg ring-2 ring-red-700/50 dark:bg-red-600 dark:ring-red-500/50 md:px-5 md:py-2.5">
                <div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    background: "repeating-linear-gradient(-45deg, transparent, transparent 4px, white 4px, white 6px)",
                  }}
                />
                <span className="relative text-xs font-black uppercase tracking-widest text-white drop-shadow-sm md:text-sm">
                  {(t as { promoLabel?: string }).promoLabel}
                </span>
              </div>
            </div>
          )}
          <h2 className="font-display text-3xl font-normal tracking-tight text-black dark:text-white md:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
            {t.paragraph}
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-5xl">
          <label
            htmlFor="project-context"
            className="mb-2 block text-left text-sm font-medium text-black dark:text-white"
          >
            {t.contextLabel}
          </label>
          <textarea
            id="project-context"
            value={projectContext}
            onChange={(e) => setProjectContext(e.target.value)}
            placeholder={t.contextPlaceholder}
            rows={3}
            className="w-full resize-none rounded-xl border border-stroke-stroke bg-white px-4 py-3 text-[15px] text-body-color placeholder:text-body-color/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-stroke-dark dark:bg-[#0c0c0d] dark:text-body-color-dark dark:placeholder:text-body-color-dark/60 dark:focus:border-primary"
          />
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Opciones por categoría */}
          <div className="flex-1 space-y-8">
            {categories.map((cat) => {
              const options = byCategory.get(cat) ?? [];
              if (options.length === 0) return null;
              return (
                <div
                  key={cat}
                  className="rounded-2xl border border-stroke-stroke/60 bg-white/80 p-6 dark:border-stroke-dark/60 dark:bg-[#0c0c0d]/80"
                >
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary dark:text-primary-light">
                    {categoryLabelsTranslated[cat]}
                  </h3>
                  <ul className="space-y-2">
                    {options.map((opt) => {
                      const isSelected = selectedIds.has(opt.id);
                      const isLocked = opt.id === "seo-basico" || opt.id === "diseno";
                      return (
                        <li key={opt.id}>
                          <label
                            className={`flex flex-col gap-0.5 rounded-xl border border-transparent py-3 px-4 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                              isLocked
                                ? "cursor-default opacity-100"
                                : "cursor-pointer hover:bg-primary/5 dark:hover:bg-primary/10"
                            } has-[:checked]:border-primary/30 has-[:checked]:bg-primary/10 dark:has-[:checked]:bg-primary/15`}
                          >
                            <span className="flex items-start gap-3 sm:items-center">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                disabled={isLocked}
                                onChange={() => toggle(opt.id)}
                                className="mt-0.5 h-4 w-4 shrink-0 rounded border-stroke-stroke text-primary focus:ring-primary dark:border-stroke-dark sm:mt-0 disabled:cursor-default"
                              />
                              <span className="flex flex-col gap-0.5">
                                <span className="text-sm font-medium text-black dark:text-white">
                                  {getOptionLabel(opt)}
                                </span>
                                {(getOptionDescription(opt) || opt.description) && (
                                  <span className="text-xs leading-snug text-body-color dark:text-body-color-dark">
                                    {getOptionDescription(opt) || opt.description}
                                  </span>
                                )}
                              </span>
                            </span>
                            <span className="shrink-0 pl-7 text-sm font-semibold tabular-nums text-primary dark:text-primary-light sm:pl-0">
                              +${opt.price}
                            </span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Resumen y total */}
          <div className="lg:w-[280px] lg:shrink-0">
            <div className="sticky top-24 rounded-2xl border border-stroke-stroke/60 bg-white p-6 shadow-one dark:border-stroke-dark/60 dark:bg-[#0c0c0d] dark:shadow-two">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-body-color dark:text-body-color-dark">
                {t.yourSelection}
              </h3>
              {selectedOptions.length === 0 && BASE_PRICE === 0 ? (
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {t.chooseOptions}
                </p>
              ) : (
                <ul className="mb-4 space-y-2 text-sm">
                  {BASE_PRICE > 0 && (
                    <li className="flex justify-between gap-2 text-black dark:text-white">
                      <span className="truncate">{t.baseLabel}</span>
                      <span className="tabular-nums text-primary dark:text-primary-light">
                        ${BASE_PRICE}
                      </span>
                    </li>
                  )}
                  {selectedOptions.map((opt) => (
                    <li
                      key={opt.id}
                      className="flex justify-between gap-2 text-black dark:text-white"
                    >
                      <span className="truncate">{getOptionLabel(opt)}</span>
                      <span className="tabular-nums text-primary dark:text-primary-light">
                        +${opt.price}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="border-t border-stroke-stroke pt-4 dark:border-stroke-dark">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-medium text-body-color dark:text-body-color-dark">
                    {t.totalEstimate}
                  </span>
                  <span className="font-display text-2xl font-normal tabular-nums text-black dark:text-white">
                    ${total}
                  </span>
                </div>
              </div>
              {paymentPlan && (
                <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 py-3 px-4 dark:border-primary/30 dark:bg-primary/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-light">
                    {paymentPlanStrings.title}
                  </p>
                  <p className="mt-1 text-sm text-black dark:text-white">
                    ${paymentPlan.initial} {paymentPlanStrings.now} + ${paymentPlan.monthly}
                    {(t as { perMonth?: string }).perMonth ?? "/mes"} {paymentPlanStrings.forMonths} {paymentPlan.months} {paymentPlanStrings.months}
                  </p>
                </div>
              )}
              <button
                type="button"
                onClick={handleRequestQuote}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 px-4 text-sm font-medium text-white shadow-btn transition-all hover:bg-primary-light hover:shadow-btn-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {t.requestQuote}
                <svg
                  className="h-4 w-4"
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
              </button>
              <p className="mt-3 text-center text-xs text-body-color dark:text-body-color-dark">
                {t.redirectNote}
              </p>
            </div>
          </div>
        </div>

        {/* Nota costos operativos */}
        <div className="mx-auto mt-12 max-w-5xl rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 dark:border-amber-800/50 dark:bg-amber-950/30">
          <p className="text-left text-sm text-amber-900 dark:text-amber-200">
            {t.operationalNote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prices;
