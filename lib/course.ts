// Contenido de la landing separado del markup.
// Reemplaza los valores marcados como PENDIENTE / "#" cuando tengas los datos.

export const site = {
  org: "Niñas Pro",
  courseTitle: "Robótica para Competencias ROV Aplicadas",
  // Datos prácticos
  modalidad: "Presencial",
  duracion: "10 sesiones",
  dirigidoA: "Enseñanza media",
  valor: "Gratuito",
  inicioTaller: "8 de agosto, 2026",
  diasHorario: "Sábados, 10:00 a 13:00 hrs",
  lugar: "Universidad Santa María, sede Valparaíso",
  inicioInscripciones: "27 de junio",
  cierreInscripciones: "18 de julio",
  // Enlaces — reemplazar "#" por la URL real del formulario
  links: {
    formulario: "#",
    instagram: "https://www.instagram.com/ninas_pro/",
    linktree: "https://linktr.ee/NinasPro",
    sitio: "https://ninaspro.cl/#/",
    mateRov: "https://materovcompetition.org/",
  },
};

export const socials = [
  { name: "Instagram", url: "https://www.instagram.com/ninas_pro/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/ninas-pro/" },
  { name: "Facebook", url: "https://www.facebook.com/NinasPro/" },
  { name: "X", url: "https://x.com/ninasPro" },
  { name: "Threads", url: "https://www.threads.com/@ninas_pro" },
  { name: "TikTok", url: "https://www.tiktok.com/@ninas_pro" },
  { name: "Sitio web", url: "https://ninaspro.cl/#/" },
];

export const logros = [
  "Programar el movimiento 3D de un ROV.",
  "Hacer que “vea” con visión por computador.",
  "Navegar y seguir objetivos bajo el agua.",
  "Ensamblar tu propio robot submarino.",
  "Resolver una misión final tipo competencia.",
];

export const contenidos = [
  {
    n: "01",
    titulo: "Fundamentos de robótica",
    texto:
      "Arquitectura de un robot: sensores, actuadores, software y control. Programación base en Python.",
  },
  {
    n: "02",
    titulo: "Movimiento y estabilidad",
    texto:
      "Control teleoperado, movimiento en tres ejes, flotabilidad y trayectorias suaves en simulación.",
  },
  {
    n: "03",
    titulo: "Navegación autónoma",
    texto:
      "Control PID, navegación hacia waypoints y seguimiento de rutas con corrección de desviación.",
  },
  {
    n: "04",
    titulo: "Percepción visual",
    texto:
      "Cámara en simulación, detección de color y seguimiento visual de objetos con OpenCV.",
  },
  {
    n: "05",
    titulo: "Construcción del ROV",
    texto:
      "Ensamblaje mecánico y electrónico, instalación de propulsores y calibración del hardware.",
  },
  {
    n: "06",
    titulo: "Misión final",
    texto:
      "Integras percepción y navegación para resolver una misión tipo MATE ROV en una competencia de cierre.",
  },
];

export const metodologia = [
  {
    titulo: "Por desafíos",
    texto:
      "Cada bloque culmina en una tarea concreta de simulación. Aprendes iterando: prueba, error y ajuste.",
  },
  {
    titulo: "Con mentoras",
    texto:
      "Un entorno de apoyo técnico y motivacional, colaborativo y libre de estereotipos.",
  },
  {
    titulo: "Hacia lo real",
    texto:
      "Conectado a competencias reales como MATE ROV y RoboSub, y a la exploración oceanográfica.",
  },
];
