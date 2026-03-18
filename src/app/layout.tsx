import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "@/app/providers";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "../styles/index.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="es"
      className={`dark ${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <head />

      <body className="min-h-screen bg-[#FAFAF9] text-[#1a1a1a] antialiased dark:bg-[#0c0c0d] dark:text-[#f5f5f5]" suppressHydrationWarning>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
