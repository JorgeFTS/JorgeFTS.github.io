// Año actual en el footer
document.getElementById("anio").textContent = new Date().getFullYear();

// Muestra el botón de CV solo si el PDF existe
fetch("assets/cv-jorge-taipe.pdf", { method: "HEAD" })
  .then((r) => { if (r.ok) document.getElementById("btn-cv").hidden = false; })
  .catch(() => {});
