# Landing · Robótica para Competencias ROV — Niñas Pro

Landing del taller, construida en **Next.js (App Router) + TypeScript + Tailwind**. Tipografía de marca **Space Grotesk** vía `next/font`.

## Correr en local

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build / deploy

```bash
npm run build && npm run start
```

Deploy directo en **Vercel**: importa el repo y deja la configuración por defecto (framework Next.js detectado automáticamente).

## Dónde editar el contenido

Todo el texto y los enlaces viven en **`lib/course.ts`** (separado del markup). Reemplaza ahí:

| Campo | Qué es |
| --- | --- |
| `diasHorario` | `[DÍAS Y HORARIO]` |
| `lugar` | `[LUGAR]` |
| `inicioInscripciones` | `[FECHA INICIO INSCRIPCIONES]` |
| `links.formulario` | URL del formulario externo |
| `links.instagram` / `links.redes` | URLs de redes sociales |

## Assets pendientes (formato requerido)

**Logo** — editar `components/Logo.tsx` (un solo lugar):
- `SVG` con `viewBox`, fondo transparente. Ideal con `fill="currentColor"` para teñir por CSS.
- Dos variantes: color/violeta (`#7A4FC0`) para fondos claros, y blanca para fondos oscuros.
- Favicon: `app/icon.svg` o PNG 512×512 transparente (solo isotipo).

**Foto grupal** — sección «¿Qué es Niñas Pro?»:
- `JPG` o `WebP`, horizontal, relación **4:3**, mínimo **1200×900 px**.
- Foto real de participantes/mentoras. Guardar en `public/ninaspro-grupo.jpg` y reemplazar el slot en `app/page.tsx`.

**Ilustración hero**: `public/hero-rov.svg` (ya incluida).

## Sistema de diseño (tokens)

Definidos en `tailwind.config.ts`. Paleta de marca suavizada hacia el rosa, contraste verificado **WCAG AA**:

- `rose` `#C8447F` — acento / CTA · `rose.dark` `#A8336A` (hover)
- `violet` `#7A4FC0` — primario · `violet.deep` `#3A2566` — secciones oscuras
- `aqua` `#3E86C9` — enlaces sobre claro (`aqua.deep` para AA)
- `ink` `#2B1C44` — texto · `cream` `#FBF2F7` / `lila` `#F2ECFA` — fondos

## Accesibilidad

`lang="es"`, skip-link, landmarks semánticos, foco visible, targets táctiles ≥44px, e ilustraciones decorativas con `aria-hidden`. Las animaciones (burbujas, flotación) se desactivan con `prefers-reduced-motion`.
