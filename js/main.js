// Año actual en el footer
document.getElementById("anio").textContent = new Date().getFullYear();

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
