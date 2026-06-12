import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Robótica ROV · Niñas Pro",
  description:
    "Taller gratuito y presencial de robótica submarina para adolescentes. Construye y programa tu propio ROV inspirado en la competencia internacional MATE ROV.",
  openGraph: {
    title: "Robótica para Competencias ROV · Niñas Pro",
    description:
      "Taller gratuito y presencial de robótica submarina para adolescentes de enseñanza media.",
    images: ["/hero-rov.svg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body className="bg-cream font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
