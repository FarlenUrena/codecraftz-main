"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error" | null; text: string }>({ type: null, text: "" });

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

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ¿Listo para comenzar tu proyecto?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad. Respondemos en menos de 24 horas.
              </p>
              {statusMessage.type && (
                <div
                  className={`mb-6 rounded-xs px-4 py-3 text-base ${
                    statusMessage.type === "success"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
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
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Ingresa tu nombre"
                        required
                        minLength={2}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Ingresa tu email"
                        required
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Mensaje
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        placeholder="Ingresa tu mensaje"
                        required
                        minLength={10}
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Enviando..." : "Enviar Mensaje"}
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
