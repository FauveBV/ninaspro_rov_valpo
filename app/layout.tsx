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
    "Taller gratuito y presencial de robótica acuática para adolescentes. Construye y programa tu propio ROV inspirado en la competencia internacional MATE ROV.",
  openGraph: {
    title: "Robótica para Competencias ROV · Niñas Pro",
    description:
      "Taller gratuito y presencial de robótica acuática para adolescentes de enseñanza media.",
    images: ["/hero-rov.svg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();",
          }}
        />
      </head>
      <body className="bg-page font-sans text-body antialiased">{children}</body>
    </html>
  );
}
