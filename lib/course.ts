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
  lugar: "Casa Central UTFSM, Valparaíso",
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

// Qué son las competencias ROV
export const competenciaIntro =
  "Un ROV (Remotely Operated Vehicle) es un robot acuático operado a distancia. En las competencias internacionales, equipos de estudiantes diseñan, construyen y pilotean estos robots para resolver misiones inspiradas en problemas reales del océano, la industria y el medioambiente.";

export const tareasRov = [
  "Inspección de estructuras y tuberías acuáticas",
  "Operación de válvulas y manipulación de objetos",
  "Toma de muestras y monitoreo de ecosistemas",
  "Navegación entre obstáculos y seguimiento visual",
];

export const competencias = [
  {
    nombre: "MATE ROV Competition",
    rol: "ROV teleoperado · referencia del curso",
    desc:
      "Competencia internacional anual donde los equipos actúan como “empresas”: diseñan y construyen un ROV teleoperado y compiten en misiones cronometradas inspiradas en la industria oceánica. Además presentan documentación técnica y un pitch ante jueces profesionales. Tiene clases por nivel (de SCOUT a EXPLORER), desde principiante hasta avanzado.",
    url: "https://materovcompetition.org/",
  },
  {
    nombre: "RoboSub",
    rol: "Vehículo autónomo · el siguiente nivel",
    desc:
      "Competencia internacional de vehículos acuáticos autónomos (AUV): a diferencia del ROV teleoperado, el robot navega y cumple las tareas por sí solo, apoyándose en visión por computador y sensores. Es el horizonte al que apunta esta línea formativa.",
    url: "https://robosub.org/",
  },
];

// Herramientas (stack) — todo libre y accesible
export const herramientas = [
  { sigla: "PY", nombre: "Python 3.8+", rol: "Lenguaje base", url: "https://docs.python.org/3/" },
  { sigla: "UUV", nombre: "UUV Simulator", rol: "Simulación acuática", url: "https://uuvsimulator.github.io/" },
  { sigla: "CV", nombre: "OpenCV", rol: "Visión por computador", url: "https://docs.opencv.org/" },
  { sigla: "ROS", nombre: "ROS2", rol: "Sistema robótico", url: "https://docs.ros.org/en/humble/index.html" },
  { sigla: "TK", nombre: "Tinkercad", rol: "Circuitos y prototipos", url: "https://www.tinkercad.com/" },
  { sigla: "VS", nombre: "VSCode", rol: "Entorno de desarrollo", url: "https://code.visualstudio.com/" },
];

export const logros = [
  "Programar el movimiento 3D de un ROV.",
  "Hacer que “vea” con visión por computador.",
  "Navegar y seguir objetivos bajo el agua.",
  "Ensamblar tu propio robot acuático.",
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
