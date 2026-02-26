# Code Craftz

Empresa enfocada en el desarrollo de páginas web y aplicaciones web personalizadas.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🌙 Modo oscuro/claro
- 📱 Totalmente responsive
- ⚡ Optimizado para rendimiento
- 🎨 Interfaz intuitiva y atractiva

## 🛠️ Tecnologías

- **Next.js 15** - Framework de React
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework de CSS
- **next-themes** - Gestión de temas

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/cc-main.git
cd cc-main
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env.local` en la raíz del proyecto:
```env
NEXT_PUBLIC_WHATSAPP=https://wa.me/1234567890?text=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
NEXT_PUBLIC_EMAILJS_TO_EMAIL=tu-email@ejemplo.com
```

4. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔧 Variables de Entorno

### `NEXT_PUBLIC_WHATSAPP`
URL de WhatsApp para contacto directo. Debe incluir el número de teléfono y el parámetro `text=` para mensajes predefinidos.

**Ejemplo:**
```
NEXT_PUBLIC_WHATSAPP=https://wa.me/1234567890?text=
```

### Configuración de EmailJS (Envío de Correos)

Para habilitar el envío de correos desde el formulario de contacto, necesitas configurar EmailJS:

1. **Crea una cuenta gratuita en [EmailJS](https://www.emailjs.com/)**
2. **Crea un servicio de email** (Gmail, Outlook, etc.) y obtén tu `Service ID`
3. **Crea un template de email** con la siguiente configuración:

   **Asunto (Subject):**
   ```
   Nuevo mensaje de contacto de {{from_name}}
   ```

   **To Email (Destinatario):**
   ```
   {{to_email}}
   ```
   O puedes poner directamente tu email: `farlenu@gmail.com`

   **Contenido (Content):**
   ```
   Has recibido un nuevo mensaje de contacto desde tu sitio web:

   Nombre: {{from_name}}
   Email: {{from_email}}
   Email de respuesta: {{reply_to}}

   Mensaje:
   {{message}}

   ---
   Este mensaje fue enviado desde el formulario de contacto de Code Craftz.
   ```

   **Variables disponibles en el template:**
   - `{{from_name}}` - Nombre del remitente
   - `{{from_email}}` - Email del remitente
   - `{{message}}` - Mensaje del usuario (este es el contenido principal)
   - `{{reply_to}}` - Email para responder (mismo que from_email)
   - `{{to_email}}` - Tu email de destino

4. **Obtén tu Public Key** desde Account → General → API Keys
5. **Agrega las variables al `.env.local`:**

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
NEXT_PUBLIC_EMAILJS_TO_EMAIL=farlenu@gmail.com
```

**Nota:** El plan gratuito de EmailJS permite 200 emails/mes, suficiente para la mayoría de proyectos pequeños.

**Importante:** Asegúrate de que el campo "To Email" en tu template esté configurado con `{{to_email}}` o directamente con tu email para que los mensajes te lleguen correctamente.

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📁 Estructura del Proyecto

```
cc-main/
├── public/              # Archivos estáticos
│   ├── images/         # Imágenes del sitio
│   ├── robots.txt      # Configuración para bots
│   └── sitemap.xml    # Mapa del sitio
├── src/
│   ├── app/            # Páginas de Next.js
│   │   ├── about/      # Página Acerca de
│   │   ├── blog/       # Página de Blog
│   │   ├── contact/    # Página de Contacto
│   │   └── page.tsx   # Página principal
│   ├── components/     # Componentes React
│   │   ├── About/      # Componentes de About
│   │   ├── Blog/       # Componentes de Blog
│   │   ├── Contact/    # Componentes de Contacto
│   │   ├── Features/   # Componentes de Features
│   │   ├── Footer/     # Footer
│   │   ├── Header/     # Header/Navbar
│   │   ├── Hero/       # Hero section
│   │   ├── Pricing/    # Componentes de Pricing
│   │   └── ...
│   ├── styles/         # Estilos globales
│   └── types/          # Tipos TypeScript
└── package.json
```

## 🌐 Páginas Disponibles

- `/` - Página principal
- `/about` - Acerca de nosotros
- `/blog` - Lista de artículos del blog
- `/blog-details` - Detalle de artículo
- `/blog-sidebar` - Blog con sidebar
- `/contact` - Página de contacto

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `src/styles/index.css`:

```css
--color-primary: #4584a8;
```

### Contenido
- **Features**: Edita `src/components/Features/featuresData.tsx`
- **Blog**: Edita `src/components/Blog/blogData.tsx`
- **Testimonios**: Edita `src/components/Testimonials/index.tsx`
- **Pricing**: Edita `src/components/Prices/Prices.tsx`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📧 Contacto

Para más información, visita nuestro sitio web o contáctanos a través del formulario de contacto.

---

Desarrollado con ❤️ por Code Craftz
