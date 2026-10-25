/* Partes comunes a todas las páginas: redes, pie de página y anuncio de los libros.
   Los pedidos de libros van por TikTok (redes.tiktok en config.js).
   No necesitas editar este archivo: los datos salen de config.js */
(function () {
  const C = window.CONFIG;
  const ICON = {
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1-5.8 3.1z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6.1-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.9 8.2c-.1-1.6-.4-3-1.6-4.2S17.4 2.4 15.8 2.3C14.2 2.2 9.8 2.2 8.2 2.3 6.6 2.4 5.2 2.7 4 3.9S2.4 6.6 2.3 8.2c-.1 1.6-.1 6 0 7.6.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6 .1 7.6 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6 0-7.6zM19.8 17.5a3.1 3.1 0 0 1-1.8 1.8c-1.2.5-4.1.4-5.4.4s-4.2.1-5.4-.4a3.1 3.1 0 0 1-1.8-1.8c-.5-1.2-.4-4.1-.4-5.5s-.1-4.2.4-5.4A3.1 3.1 0 0 1 7.2 4.8c1.2-.5 4.1-.4 5.4-.4s4.2-.1 5.4.4a3.1 3.1 0 0 1 1.8 1.8c.5 1.2.4 4.1.4 5.4s.1 4.3-.4 5.5z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.5.3-.5v-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.4 13.4 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.4zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.9L0 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12a11.7 11.7 0 0 0-3.4-8.4z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4z"/></svg>',
    drive: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16.5 7 11.5l1.4-1.4 2.6 2.6V3h2v9.7l2.6-2.6 1.4 1.4-5 5zM4 19h16v2H4z"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>'
  };
  window.ICON = ICON;

  /* Pedidos de libros: por TikTok (no se publica ningún número personal) */
  window.pedidoLink = function () { return C.redes.tiktok || ""; };
  window.pedidoBtn = function (extraClass) {
    const u = pedidoLink();
    return u ? `<a class="btn tk${extraClass ? " " + extraClass : ""}" href="${u}" target="_blank" rel="noopener">${ICON.tiktok}Pedir por TikTok</a>` : "";
  };

  /* Redes en la barra superior (orden: el de config.js). Solo se muestran las que tienen enlace. */
  const socials = Object.entries(C.redes).filter(([k, u]) => u && ICON[k])
    .map(([k, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${k}">${ICON[k]}</a>`).join("");
  document.querySelectorAll("[data-socials]").forEach(el => el.innerHTML = socials);

  /* Pie de página */
  const foot = document.getElementById("pie");
  if (foot) {
    foot.className = "site gut";
    foot.innerHTML = `<div class="wrap">
      <a class="brand" href="./">Matemática <span>U</span> y <span>Pre</span></a>
      <div class="cols">
        <div><strong>Dirigido por</strong><br>${C.autor.nombre}<div class="socials" style="margin-top:10px">${socials}</div></div>
        <div><strong>Sucursal La Paz</strong><br>Av. Illimani N° 1676 (lado del Hotel Davina)<br>Tel. 78849639 · 73293618</div>
        <div><strong>Sucursal El Alto</strong><br>Av. Sucre, calle José Arzabe N° 78 (frente Clínica de Veterinaria, UPEA)<br>Tel. 68066572</div>
      </div></div>`;
  }

  /* Anuncio flotante: alterna entre los libros */
  const A = C.anuncio, L = C.libros;
  if (!L.length) return;
  const ad = document.createElement("aside");
  ad.className = "ad"; ad.setAttribute("aria-label", "Libros del autor");
  document.body.appendChild(ad);
  let i = 0, hideT;
  function fill() {
    const b = L[i % L.length]; i++;
    ad.innerHTML = `<button class="x" type="button" aria-label="Cerrar anuncio">×</button>
      <img src="${b.imagen}" alt="Portada: ${b.titulo}">
      <div class="b"><span class="eyebrow">Libro · ${b.edicion}</span>
      <span class="t">${b.titulo.split(" · ")[0]}</span>
      <p class="p">${b.texto} <span class="price">${b.precio}</span></p>
      ${pedidoBtn()}</div>`;
    ad.querySelector(".x").onclick = hide;
  }
  function show() { fill(); requestAnimationFrame(() => ad.classList.add("show")); clearTimeout(hideT); hideT = setTimeout(hide, A.duracion * 1000); }
  function hide() { ad.classList.remove("show"); }
  ad.addEventListener("mouseenter", () => clearTimeout(hideT));
  setTimeout(() => { show(); setInterval(show, A.cada * 1000); }, A.primero * 1000);
})();
