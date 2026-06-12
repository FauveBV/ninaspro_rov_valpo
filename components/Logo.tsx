/* eslint-disable @next/next/no-img-element */
// Logo de Niñas Pro (wordmark). Dos variantes transparentes:
//  - "white"  -> /logo-white.png  (fondos oscuros: hero, footer)
//  - "color"  -> /logo-violet.png (fondos claros: barra superior)
export default function Logo({
  variant = "color",
  className = "h-9 w-auto",
}: {
  variant?: "color" | "white";
  className?: string;
}) {
  const src = variant === "white" ? "/logo-white.png" : "/logo-violet.png";
  return <img src={src} alt="Niñas Pro" className={className} />;
}
