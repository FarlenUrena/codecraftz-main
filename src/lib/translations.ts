export type Lang = "es" | "en";

export const translations = {
  es: {
    features: {
      title: "Nuestros Servicios",
      paragraph:
        "Ofrecemos soluciones completas de desarrollo web adaptadas a las necesidades de tu negocio. Cada proyecto es único y diseñado para generar resultados tangibles.",
      items: [
        {
          title: "Diseño Web Personalizado",
          paragraph:
            "Desarrollamos sitios web atractivos y adaptados a las necesidades individuales de cada negocio, destacando tu marca en el entorno digital.",
        },
        {
          title: "Desarrollo a la Medida",
          paragraph:
            "Ofrecemos soluciones digitales únicas mediante el desarrollo de software personalizado, garantizando un ajuste preciso a tus objetivos.",
        },
        {
          title: "Asesoría Digital",
          paragraph:
            "Brindamos orientación completa para la digitalización de su sitio, asegurando una presencia sólida en línea.",
        },
        {
          title: "Mantenimiento",
          paragraph:
            "¿Ya tienes un sistema en funcionamiento? Nos encargamos del mantenimiento para que puedas centrarte en tu negocio.",
        },
        {
          title: "Optimización SEO",
          paragraph:
            "Mejoramos la visibilidad de tu sitio en buscadores para atraer más tráfico orgánico y potenciales clientes.",
        },
        {
          title: "Soporte Técnico",
          paragraph:
            "Ofrecemos soporte continuo para nuestras aplicaciones para solucionar problemas y garantizar que tu plataforma funcione sin interrupciones.",
        },
      ],
    },
    projects: {
      title: "Proyectos",
      paragraph:
        "Algunos de los trabajos que hemos desarrollado. Cada uno está pensado para resolver necesidades concretas de nuestros clientes.",
      items: [
        {
          title: "E-commerce con catálogo",
          description:
            "Tienda online con catálogo administrable, carrito integrado con WhatsApp y panel de gestión para el cliente.",
          linkLabel: "¿Quieres uno similar?",
        },
        {
          title: "Sitio corporativo",
          description:
            "Página web institucional con múltiples secciones, formulario de contacto y diseño adaptable a móviles.",
          linkLabel: "Solicitar presupuesto",
        },
        {
          title: "Landing y conversión",
          description:
            "Landing page enfocada en conversión con formularios optimizados y integración con herramientas de marketing.",
          linkLabel: "Ver opciones",
        },
      ],
    },
    prices: {
      title: "Arma tu presupuesto",
      paragraph:
        "Selecciona lo que necesitas y verás el total estimado. Los precios son referenciales; al contactarnos afinamos la cotización según tu proyecto.",
      promoLabel: "Precios de lanzamiento",
      contextLabel: "Cuéntanos brevemente de qué trata tu negocio, idea o proyecto",
      contextPlaceholder:
        "Ej: Tienda de repostería que quiere vender por WhatsApp, restaurante que necesita reservas y menú online...",
      categories: {
        pagina: "Página web",
        dominio: "Dominio y hosting",
        extras: "Funcionalidades extra",
      },
      yourSelection: "Tu selección",
      chooseOptions: "Elige opciones arriba para ver el total.",
      baseLabel: "Base (sitio web)",
      totalEstimate: "Total estimado",
      perMonth: "/mes",
      paymentPlanTitle: "O paga en cuotas",
      paymentPlanNow: "ahora",
      paymentPlanFor: "durante",
      paymentPlanMonths: "meses",
      requestQuote: "Solicitar presupuesto",
      redirectNote: "Te redirigiremos al formulario de contacto con tu selección.",
      operationalNote:
        "Según el tamaño del proyecto, es posible que debas asumir costos de hosting de base de datos, dominio renovable u otros gastos operativos que no están incluidos en este presupuesto. Te lo detallamos al afinar la cotización.",
    },
    footer: {
      description:
        "Code Craftz es una empresa especializada en desarrollo web y aplicaciones personalizadas. Transformamos tus ideas en soluciones digitales que impulsan tu negocio.",
      services: "Servicios",
      company: "Empresa",
      contact: "Contacto",
      webDev: "Desarrollo Web",
      projects: "Proyectos",
      plans: "Nuestros Planes",
      contactLink: "Contacto",
      about: "Sobre Nosotros",
      pricing: "Precios",
      support: "Soporte",
      sendMessage: "Envíanos un mensaje",
      whatsapp: "WhatsApp",
      copyright: "Todos los derechos reservados.",
    },
    contact: {
      success: "¡Mensaje enviado exitosamente! Te contactaremos pronto.",
      errorRequired: "Por favor, completa todos los campos.",
      errorEmail: "Por favor, ingresa un email válido.",
      errorConfig: "Error de configuración. Por favor, contacta al administrador.",
      errorSend: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
    },
  },
  en: {
    features: {
      title: "Our Services",
      paragraph:
        "We offer complete web development solutions tailored to your business needs. Every project is unique and designed to deliver tangible results.",
      items: [
        {
          title: "Custom Web Design",
          paragraph:
            "We build attractive websites tailored to each business, highlighting your brand in the digital space.",
        },
        {
          title: "Custom Development",
          paragraph:
            "We deliver unique digital solutions through custom software development, ensuring a precise fit for your goals.",
        },
        {
          title: "Digital Consulting",
          paragraph:
            "We provide full guidance for digitizing your presence and ensuring a solid online presence.",
        },
        {
          title: "Maintenance",
          paragraph:
            "Already have a system in place? We handle maintenance so you can focus on your business.",
        },
        {
          title: "SEO Optimization",
          paragraph:
            "We improve your site's visibility in search engines to attract more organic traffic and potential customers.",
        },
        {
          title: "Technical Support",
          paragraph:
            "We offer ongoing support for our applications to fix issues and keep your platform running smoothly.",
        },
      ],
    },
    projects: {
      title: "Projects",
      paragraph:
        "Some of the work we've delivered. Each one is designed to solve specific needs for our clients.",
      items: [
        {
          title: "E-commerce with catalog",
          description:
            "Online store with manageable catalog, WhatsApp-integrated cart, and client management panel.",
          linkLabel: "Want something similar?",
        },
        {
          title: "Corporate site",
          description:
            "Institutional website with multiple sections, contact form, and mobile-friendly design.",
          linkLabel: "Request a quote",
        },
        {
          title: "Landing & conversion",
          description:
            "Conversion-focused landing page with optimized forms and marketing tool integration.",
          linkLabel: "See options",
        },
      ],
    },
    prices: {
      title: "Build your quote",
      paragraph:
        "Select what you need and see the estimated total. Prices are indicative; we’ll refine the quote when you contact us.",
      promoLabel: "Launch prices",
      contextLabel: "Tell us briefly what your business, idea or project is about",
      contextPlaceholder:
        "E.g.: Bakery that wants to sell via WhatsApp, restaurant that needs reservations and online menu...",
      categories: {
        pagina: "Website",
        dominio: "Domain & hosting",
        extras: "Extra features",
      },
      yourSelection: "Your selection",
      chooseOptions: "Select options above to see the total.",
      baseLabel: "Base (website)",
      totalEstimate: "Estimated total",
      perMonth: "/mo",
      paymentPlanTitle: "Or pay in installments",
      paymentPlanNow: "now",
      paymentPlanFor: "for",
      paymentPlanMonths: "months",
      requestQuote: "Request quote",
      redirectNote: "We’ll take you to the contact form with your selection.",
      operationalNote:
        "Depending on project size, you may need to cover database hosting, domain renewal, or other operational costs not included in this quote. We’ll detail this when we finalize the quote.",
      optionLabels: {
        "sec-3": "3 sections",
        "sec-5": "5 sections",
        "sec-10": "Up to 10 sections",
        diseno: "Colors and design to choose",
        formulario: "Contact form",
        "multi-idioma": "2 languages",
        "tema-oscuro": "Light/dark theme",
        "dominio-propio": "Own domain",
        "hosting-incluido": "Hosting included 1 year",
        "base-datos": "Database",
        "carrito-whatsapp": "Cart + WhatsApp",
        "catalogo-admin": "Manageable catalog",
        "seo-basico": "Basic SEO optimization",
      },
      optionDescriptions: {
        "sec-3": "Ideal for a simple presentation: home, services, contact.",
        "sec-5": "More room for content: about us, testimonials, etc.",
        "sec-10": "Full site with multiple pages and blocks.",
        diseno: "We customize palette and style to match your brand.",
        formulario: "Visitors can send you messages from the site.",
        "multi-idioma": "Site ready to show content in two languages.",
        "tema-oscuro": "User can choose light or dark mode.",
        "dominio-propio": "E.g. yourbusiness.com. Includes 1-year registration.",
        "hosting-incluido": "For landing page only. Hosting included.",
        "base-datos": "To store data, users, or manageable content.",
        "carrito-whatsapp": "Catalog with cart that sends orders via WhatsApp.",
        "catalogo-admin": "Panel for you to edit products or services without coding.",
        "seo-basico": "Titles, descriptions, and structure for search engines.",
      },
    },
    footer: {
      description:
        "Code Craftz specializes in web development and custom applications. We turn your ideas into digital solutions that grow your business.",
      services: "Services",
      company: "Company",
      contact: "Contact",
      webDev: "Web Development",
      projects: "Projects",
      plans: "Our Plans",
      contactLink: "Contact",
      about: "About Us",
      pricing: "Pricing",
      support: "Support",
      sendMessage: "Send us a message",
      whatsapp: "WhatsApp",
      copyright: "All rights reserved.",
    },
    contact: {
      success: "Message sent successfully! We’ll get back to you soon.",
      errorRequired: "Please fill in all fields.",
      errorEmail: "Please enter a valid email.",
      errorConfig: "Configuration error. Please contact the administrator.",
      errorSend: "Something went wrong sending your message. Please try again.",
    },
  },
} as const;
