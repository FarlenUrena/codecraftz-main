"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = ({ defaultMessage = "" }: { defaultMessage?: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error" | null; text: string }>({ type: null, text: "" });
  const { lang } = useLanguage();

  useEffect(() => {
    if (defaultMessage) setMessage(defaultMessage);
  }, [defaultMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: null, text: "" });

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      setStatusMessage({ type: "error", text: "Por favor, completa todos los campos." });
      setIsLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setStatusMessage({ type: "error", text: "Por favor, ingresa un email válido." });
      setIsLoading(false);
      return;
    }

    // Verificar que las variables de entorno estén configuradas
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage({ 
        type: "error", 
        text: "Error de configuración. Por favor, contacta al administrador." 
      });
      setIsLoading(false);
      return;
    }

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        reply_to: email, // Para poder responder directamente al usuario
        to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || "farlenu@gmail.com",
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatusMessage({ 
        type: "success", 
        text: "¡Mensaje enviado exitosamente! Te contactaremos pronto." 
      });
                      form.reset();
                      setMessage("");
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setStatusMessage({ 
        type: "error", 
        text: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente." 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const heading =
    lang === "en"
      ? "Ready to start your project?"
      : "¿Listo para comenzar tu proyecto?";

  const description =
    lang === "en"
      ? "Tell us about your idea and we’ll help you make it real. We usually reply within 24 hours."
      : "Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad. Respondemos en menos de 24 horas.";

  const nameLabel = lang === "en" ? "Your name" : "Tu Nombre";
  const emailLabel = lang === "en" ? "Your email" : "Tu Email";
  const messageLabel = lang === "en" ? "Your message" : "Tu Mensaje";
  const messagePlaceholder =
    lang === "en" ? "Write your message" : "Ingresa tu mensaje";
  const submitLabel = isLoading
    ? lang === "en"
      ? "Sending..."
      : "Enviando..."
    : lang === "en"
    ? "Send message"
    : "Enviar Mensaje";

  return (
    <section id="contact" className="relative overflow-hidden bg-dot-grid bg-[#FAFAF9] py-20 dark:bg-[#0c0c0d] md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-mesh" />
      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-2xl rounded-2xl border border-stroke-stroke bg-white/95 px-8 py-10 shadow-two backdrop-blur-sm dark:border-stroke-dark dark:bg-[#0f0f11]/95 sm:p-12">
              <h2 className="font-display mb-2 text-2xl font-normal tracking-tight text-black dark:text-white sm:text-3xl">
                {heading}
              </h2>
              <p className="mb-10 text-base text-body-color dark:text-body-color-dark">
                {description}
              </p>
              {statusMessage.type && (
                <div
                  className={`mb-6 rounded-xl px-4 py-3 text-sm ${
                    statusMessage.type === "success"
                      ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200"
                      : "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {nameLabel}
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Ingresa tu nombre"
                        required
                        minLength={2}
                        className="border-stroke w-full rounded-xl border bg-[#f8f8f8] px-4 py-3 text-[15px] text-body-color outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-stroke-dark dark:bg-[#1a1a1d] dark:text-body-color-dark dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {emailLabel}
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Ingresa tu email"
                        required
                        className="border-stroke w-full rounded-xl border bg-[#f8f8f8] px-4 py-3 text-[15px] text-body-color outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-stroke-dark dark:bg-[#1a1a1d] dark:text-body-color-dark dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {messageLabel}
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={messagePlaceholder}
                        required
                        minLength={10}
                        className="border-stroke w-full resize-none rounded-xl border bg-[#f8f8f8] px-4 py-3 text-[15px] text-body-color outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-stroke-dark dark:bg-[#1a1a1d] dark:text-body-color-dark dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="rounded-2xl bg-primary px-8 py-3.5 text-[15px] font-medium text-white shadow-btn transition-all duration-200 hover:bg-primary-light hover:shadow-btn-hover disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {submitLabel}
                      </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
