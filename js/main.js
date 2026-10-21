// Año actual en el footer
document.getElementById("anio").textContent = new Date().getFullYear();

// Textos en español; el inglés es el texto que ya está en el HTML
const es = {
  skip: "Saltar al contenido", nav_about: "Sobre mí", nav_projects: "Proyectos", nav_contact: "Contacto",
  hi: "Hola, soy Jorge ✌", role: "Estudiante de Ingeniería de Software",
  lead: "Backend, QA y camino a DevOps. Busco prácticas pre-profesionales.",
  connect: "Conéctate conmigo", about_h: "Sobre mí",
  about_p1: "Estudio Ingeniería de Software en la UPC (Perú) desde 2023. Me gusta construir backends bien organizados y comprobar que funcionan con pruebas.",
  about_p2: "Aún no tengo experiencia laboral, por eso aquí muestro proyectos reales y qué hice yo en cada uno. Ahora estoy aprendiendo Cloud y DevOps con Azure: contenedores, pipelines e infraestructura como código.",
  cv: "Descargar CV →", stack_h: "Stack.", g_backend: "Backend", g_frontend: "Frontend y móvil", g_data: "Datos",
  g_devops: "Calidad y DevOps", learning: "(aprendiendo)", projects_h: "Proyectos.", wip: "En desarrollo",
  cp_desc: "Plataforma que conecta clientes con técnicos: búsqueda, contratación, agenda de reservas y reseñas.",
  contrib: "Mi aporte:",
  cp_contrib: "proyecto propio. Ahora estoy agregando Docker, CI/CD con GitHub Actions, tests y despliegue en Azure con Terraform.",
  private: "Repo privado", repo: "Ver repo",
  mn_desc: "Conversor de archivos para Linux con una rueda radial en Nautilus. Más de 250 conversiones, todo corre en tu máquina. Beta 0.1.0.",
  mn_contrib: "proyecto propio: la app, los conversores y el paquete .deb.",
  mn_video: "Demo de Mandarina: eliges un archivo, escoges un formato en la rueda y aparece el archivo convertido",
  np_desc: "Backend de gestión clínica hecho en equipo (Spring Boot, MySQL, JWT, métricas con Prometheus y Grafana). La app original es de un equipo.",
  np_contrib: "la capa DevOps: contenedores, pipeline, despliegue en Azure e infraestructura como código.",
  wip_h: "En progreso.", t1: "Docker, CI/CD y tests.", t2h: "NursePulse en Azure",
  t2: "contenedores, pipeline e infraestructura como código.", t3h: "Certificación AZ-900", t3: "fundamentos de Azure.",
  connect_h: "¡Conectemos!",
  connect_p: "Si quieres saber más sobre mí o mi trabajo, o solo saludar, escríbeme. Me encantará leerte.",
  top: "Volver arriba ↑"
};
const meta = {
  en: {
    title: "Jorge Taipe · Software Engineering · Backend, QA and DevOps",
    desc: "Portfolio of Jorge Francisco Taipe Sangama, Software Engineering student at UPC. Looking for internships in backend, QA and DevOps/Cloud."
  },
  es: {
    title: "Jorge Taipe · Ingeniería de Software · Backend, QA y DevOps",
    desc: "Portafolio de Jorge Francisco Taipe Sangama, estudiante de Ingeniería de Software en UPC. Busco prácticas en backend, QA y DevOps/Cloud."
  }
};

// Guarda el inglés original la primera vez para poder volver a él
const nodos = document.querySelectorAll("[data-i18n]");
nodos.forEach((n) => { n.dataset.en = n.textContent; });

function setLang(lang) {
  nodos.forEach((n) => { n.textContent = lang === "es" ? es[n.dataset.i18n] : n.dataset.en; });
  document.querySelectorAll("[data-i18n-aria]").forEach((n) => {
    n.dataset.enAria = n.dataset.enAria || n.getAttribute("aria-label");
    n.setAttribute("aria-label", lang === "es" ? es[n.dataset.i18nAria] : n.dataset.enAria);
  });
  document.documentElement.lang = lang;
  document.title = meta[lang].title;
  document.querySelector('meta[name="description"]').content = meta[lang].desc;
  const btn = document.getElementById("lang");
  btn.textContent = lang === "es" ? "EN" : "ES";
  btn.setAttribute("aria-label", lang === "es" ? "EN English" : "ES Español");
  try { localStorage.setItem("idioma", lang); } catch (e) {}
}

// Idioma por defecto: inglés; solo cambia si el usuario eligió español antes
let idioma = "en";
try { idioma = localStorage.getItem("idioma") === "es" ? "es" : "en"; } catch (e) {}
if (idioma === "es") setLang("es");
document.getElementById("lang").addEventListener("click", () => {
  setLang(document.documentElement.lang === "es" ? "en" : "es");
});

// Botón de tema: alterna claro/oscuro y lo recuerda
const raiz = document.documentElement;
try { const t = localStorage.getItem("tema"); if (t) raiz.dataset.theme = t; } catch (e) {}
document.getElementById("theme").addEventListener("click", () => {
  const oscuro = raiz.dataset.theme
    ? raiz.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  raiz.dataset.theme = oscuro ? "light" : "dark";
  try { localStorage.setItem("tema", raiz.dataset.theme); } catch (e) {}
});

// Sin movimiento: el video de la demo no se reproduce solo
if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video").forEach((v) => { v.autoplay = false; v.pause(); v.controls = true; });
}
