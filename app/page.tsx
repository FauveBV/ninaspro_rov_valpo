/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/Logo";
import Bubbles from "@/components/Bubbles";
import { site, socials, logros, contenidos, metodologia } from "@/lib/course";
import { socialPaths } from "@/lib/icons";

export default function Page() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-rose focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-violet/10 bg-cream/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Principal">
          <a href="#top" aria-label={`${site.org} — inicio`}>
            <Logo variant="color" />
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-ink/80 md:flex">
            <a href="#taller" className="transition hover:text-rose">El taller</a>
            <a href="#aprendes" className="transition hover:text-rose">Qué aprendes</a>
            <a href="#logistica" className="transition hover:text-rose">Cuándo y dónde</a>
            <a href="#ninaspro" className="transition hover:text-rose">Niñas Pro</a>
          </div>
          <a
            href="#inscripcion"
            className="inline-flex items-center rounded-full bg-rose px-5 py-2.5 text-sm font-medium text-white transition hover:bg-rose-dark"
          >
            Inscríbete
          </a>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden bg-violet-deep text-white" aria-labelledby="hero-title">
          <img
            src="/hero-rov-color.png"
            alt=""
            aria-hidden="true"
            className="animate-shimmer absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-deep/85 via-violet-deep/55 to-violet-deep/25" />
          <Bubbles count={18} />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-16 md:grid-cols-2 md:pb-28 md:pt-24">
            <div>
              <span className="inline-flex items-center rounded-full bg-rose/90 px-3 py-1 text-xs font-medium uppercase tracking-wide">
                Taller gratuito · Vacante 2026
              </span>
              <h1 id="hero-title" className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                Sumérgete en la
                <br />
                <span className="text-rose-100">robótica submarina</span>
              </h1>
              <p className="mt-5 max-w-md text-lg text-white/85">
                Construye y programa tu propio ROV y enfréntate a desafíos inspirados en la competencia
                internacional <strong className="font-medium text-white">MATE ROV</strong>. Para adolescentes con
                curiosidad por la tecnología. Sin experiencia previa.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#inscripcion"
                  className="inline-flex items-center rounded-full bg-rose px-7 py-3.5 font-medium text-white transition hover:bg-rose-dark"
                >
                  Quiero inscribirme
                </a>
                <a
                  href="#taller"
                  className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-medium text-white transition hover:bg-white/20"
                >
                  Conoce el taller
                </a>
              </div>
              <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <div><dt className="text-white/60">Modalidad</dt><dd className="font-medium">{site.modalidad}</dd></div>
                <div><dt className="text-white/60">Duración</dt><dd className="font-medium">{site.duracion}</dd></div>
                <div><dt className="text-white/60">Dirigido a</dt><dd className="font-medium">{site.dirigidoA}</dd></div>
                <div><dt className="text-white/60">Valor</dt><dd className="font-medium text-rose-100">{site.valor}</dd></div>
              </dl>
            </div>

            <div className="relative">
              <div className="animate-floaty overflow-hidden rounded-xl2 shadow-2xl ring-1 ring-white/20">
                <img
                  src="/hero-rov-color.png"
                  alt="Ilustración de robots submarinos ROV navegando entre aros bajo el agua, junto a una estación submarina y arrecifes de coral."
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* EL TALLER */}
        <section id="taller" className="mx-auto max-w-6xl px-5 py-20 md:py-24" aria-labelledby="taller-title">
          <div id="contenido" />
          <p className="text-sm font-medium uppercase tracking-wide text-rose">El taller</p>
          <h2 id="taller-title" className="mt-2 max-w-3xl text-3xl font-bold md:text-4xl">
            {site.courseTitle}
          </h2>
          <div className="mt-8 grid items-start gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                La robótica tiene cada vez más protagonismo en desafíos científicos, industriales y medioambientales.
                En este taller, niñas y adolescentes se acercan al desarrollo de{" "}
                <strong className="font-medium text-ink">sistemas robóticos submarinos</strong> a través de una
                experiencia práctica y progresiva: exploran el movimiento, el control y la percepción robótica en
                entornos simulados, y desarrollan habilidades técnicas y creativas.
              </p>
              <p>
                El trabajo se inspira en la{" "}
                <a
                  href={site.links.mateRov}
                  target="_blank"
                  rel="noopener"
                  className="text-magenta-deep underline decoration-2 underline-offset-2 hover:text-rose"
                >
                  MATE ROV Competition
                </a>
                , donde los equipos diseñan y programan vehículos submarinos capaces de navegar, percibir su entorno
                acuático y ejecutar misiones. Partimos desde la simulación y avanzamos hasta construir y probar un ROV
                físico.
              </p>
            </div>
            <aside className="rounded-xl2 bg-lila p-6 md:p-7">
              <h3 className="text-lg font-medium text-violet-deep">Lo que vas a lograr</h3>
              <ul className="mt-4 space-y-3 text-ink/80">
                {logros.map((l) => (
                  <li key={l} className="flex gap-3">
                    <span className="font-bold text-rose">→</span> {l}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* QUÉ APRENDES */}
        <section id="aprendes" className="border-y border-violet/10 bg-white py-20 md:py-24" aria-labelledby="aprendes-title">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-sm font-medium uppercase tracking-wide text-rose">Contenidos</p>
            <h2 id="aprendes-title" className="mt-2 text-3xl font-bold md:text-4xl">Qué vas a aprender</h2>
            <p className="mt-3 max-w-2xl text-lg text-ink/70">
              Cada bloque combina conceptos breves y aplicación inmediata. Avanzas por desafíos, desde el control
              básico hasta misiones integradas.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {contenidos.map((c, i) => (
                <article key={c.n} className="rounded-xl2 border border-violet/15 p-6 transition hover:border-rose/50">
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-xl font-bold ${
                      i % 2 === 0 ? "bg-rose-100 text-rose-dark" : "bg-lila text-violet"
                    }`}
                  >
                    {c.n}
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{c.titulo}</h3>
                  <p className="mt-2 text-ink/70">{c.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* METODOLOGÍA */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-24" aria-labelledby="metodo-title">
          <p className="text-sm font-medium uppercase tracking-wide text-rose">Metodología</p>
          <h2 id="metodo-title" className="mt-2 text-3xl font-bold md:text-4xl">Aprender haciendo, con acompañamiento</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {metodologia.map((m) => (
              <div key={m.titulo} className="space-y-2">
                <p className="text-2xl font-bold text-violet">{m.titulo}</p>
                <p className="text-ink/70">{m.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOGÍSTICA */}
        <section id="logistica" className="bg-violet-deep py-20 text-white md:py-24" aria-labelledby="log-title">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-sm font-medium uppercase tracking-wide text-rose-100">Cuándo y dónde</p>
            <h2 id="log-title" className="mt-2 text-3xl font-bold md:text-4xl">Datos prácticos</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl2 border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-white/60">Días y horario</p>
                <p className="mt-1 text-xl font-medium">{site.diasHorario}</p>
              </div>
              <div className="rounded-xl2 border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-white/60">Lugar</p>
                <p className="mt-1 text-xl font-medium">{site.lugar}</p>
              </div>
              <div className="rounded-xl2 border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-white/60">Inicio del taller</p>
                <p className="mt-1 text-xl font-medium">{site.inicioTaller}</p>
              </div>
              <div className="rounded-xl2 border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-white/60">Valor</p>
                <p className="mt-1 text-xl font-medium text-rose-100">{site.valor}</p>
              </div>
            </div>
            <p className="mt-8 max-w-2xl text-white/70">
              Dirigido a adolescentes mujeres de enseñanza media con curiosidad por la tecnología. No se requiere
              experiencia previa en robótica; ayuda haber tenido un primer acercamiento a la programación en Python,
              pero no es obligatorio.
            </p>
          </div>
        </section>

        {/* INSCRIPCIÓN */}
        <section id="inscripcion" className="mx-auto max-w-6xl px-5 py-20 md:py-24" aria-labelledby="insc-title">
          <div className="rounded-xl2 bg-rose-100 p-8 text-center md:p-12">
            <h2 id="insc-title" className="text-3xl font-bold text-ink md:text-4xl">Postula al taller</h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-ink/75">
              Inscripciones abiertas del{" "}
              <strong className="text-rose-dark">{site.inicioInscripciones}</strong> al{" "}
              <strong className="text-rose-dark">{site.cierreInscripciones}</strong>. Cupos limitados.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {site.links.formulario !== "#" ? (
                <a
                  href={site.links.formulario}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center rounded-full bg-rose px-8 py-4 font-medium text-white transition hover:bg-rose-dark"
                >
                  Ir al formulario de inscripción
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center rounded-full bg-rose/60 px-8 py-4 font-medium text-white/90"
                >
                  Inscripciones desde el {site.inicioInscripciones}
                </button>
              )}
              <a
                href={site.links.linktree}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center rounded-full border border-violet/20 bg-white px-8 py-4 font-medium text-ink transition hover:bg-cream"
              >
                Síguenos en redes
              </a>
            </div>
          </div>
        </section>

        {/* NIÑAS PRO */}
        <section id="ninaspro" className="border-t border-violet/10 bg-white py-20 md:py-24" aria-labelledby="np-title">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-rose">Quiénes somos</p>
              <h2 id="np-title" className="mt-2 text-3xl font-bold md:text-4xl">¿Qué es Niñas Pro?</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">
                Niñas Pro es una organización chilena que{" "}
                <strong className="font-medium text-ink">empodera a niñas y adolescentes a través de la enseñanza de
                la programación</strong>{" "}
                e inspira vocaciones científicas y tecnológicas. Trabajamos para eliminar las barreras de acceso a la
                tecnología, con cursos y actividades en formato presencial y virtual.
              </p>
              <blockquote className="mt-6 border-l-4 border-rose pl-5 italic text-ink/80">
                Queremos que las niñas tengan la oportunidad de aprender computación y se vuelvan{" "}
                <span className="font-medium not-italic text-violet">creadoras</span>, no solo consumidoras de
                tecnología.
              </blockquote>
            </div>
            {/* SLOT FOTO GRUPAL — reemplaza por una foto real de participantes/mentoras.
                Ver specs de la imagen en README.md. Sugerido: /ninaspro-grupo.jpg */}
            <figure className="overflow-hidden rounded-xl2 ring-1 ring-violet/15">
              <div className="flex aspect-[4/3] w-full flex-col items-center justify-center bg-lila text-center text-ink/55">
                <span className="text-sm font-medium uppercase tracking-wide text-violet">Foto grupal</span>
                <span className="mt-1 max-w-[16rem] px-4 text-sm">
                  Reemplaza por una imagen real de niñas y mentoras (ver specs en el README).
                </span>
              </div>
              <figcaption className="sr-only">Participantes y mentoras de Niñas Pro.</figcaption>
            </figure>
          </div>
        </section>
      </main>

      {/* FOOTER ANIMADO */}
      <footer className="relative overflow-hidden bg-violet-deep text-white">
        <img
          src="/hero-rov.svg"
          alt=""
          aria-hidden="true"
          className="animate-shimmer absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-violet-deep/70" />
        <Bubbles count={12} />

        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Logo variant="white" className="h-8 w-auto" />
              <p className="mt-3 max-w-sm text-white/70">
                Robótica submarina para que más niñas y adolescentes se proyecten en áreas STEM.
              </p>
            </div>
            <nav className="flex items-center gap-2" aria-label="Redes sociales">
              {socials
                .filter((s) => socialPaths[s.name])
                .map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener"
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-rose"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d={socialPaths[s.name]} />
                    </svg>
                  </a>
                ))}
            </nav>
          </div>
          <p className="relative mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
            © 2026 Niñas Pro · Taller {site.courseTitle}
          </p>
        </div>
      </footer>
    </>
  );
}
