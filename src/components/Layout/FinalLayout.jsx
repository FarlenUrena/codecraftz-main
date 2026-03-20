"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Prices from "@/components/Prices/Prices";
import Projects from "@/components/Projects";
import FloatingWhatsApp from "@/components/WhatsApp/FloatingWhatsApp";
import { useState } from "react";

export default function FinalLayout() {
  const [defaultMessage, setDefaultMessage] = useState("");

  const handleDefaultMessageChange = (message) => {
      setDefaultMessage(message);
    };

    const openWhatsApp = () => {
      // Lógica para abrir WhatsApp, puedes redirigir al usuario a la página de WhatsApp o abrir una ventana de chat, según tus preferencias.
      // Puedes usar window.open o react-router-dom, según la configuración de tu aplicación.
      // Por ejemplo, usando window.open:
      console.log(process.env.NEXT_PUBLIC_WHATSAPP);
      window.open(process.env.NEXT_PUBLIC_WHATSAPP, "_blank");
    };


  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Projects />
      <Prices onDefaultMessageChange={handleDefaultMessageChange} />
      <Contact defaultMessage={defaultMessage} />
      <FloatingWhatsApp />
    </>
  );
}
