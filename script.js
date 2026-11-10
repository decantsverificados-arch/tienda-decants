
"use strict";

// NÚMERO DE WHATSAPP DE TADESHOP
const TELEFONO = "527225553562";

// COLECCIÓN DE PERFUMES
// disponible: true = DISPONIBLE
// disponible: false = AGOTADO

const perfumes = [
  {
    marca: "Armaf",
    nombre: "Odyssey Homme Eau de Parfum",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTmOIfjTdSMgvbbhQQBO4nzAKXx_YHSgtUpPmUaKsLAkvSLyZgQWXuHc&s=10",
    disponible: true
  },
  {
    marca: "JEAN PAUL GAULTIER",
    nombre: "Le Beau Le Parfum",
    imagen: "https://lamarinamx.vtexassets.com/arquivos/ids/1150855-800-auto?v=638830208523270000&width=800&height=auto&aspect=true",
    disponible: false
  },
  {
    marca: "Afnan",
    nombre: "9PM",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3RZnfciMy4bUoJthXlBzZ0oXdEFSHDfkuP6bTSr-yJy1yB1ZXQWKamki&s=10",
    disponible: true
  },
  {
    marca: "Armaf",
    nombre: "Odyssey Mandarin Sky",
    imagen: "https://fragarabic.com/cdn/shop/files/Odyssey_Mandarin_Sky_Armaf_Eau_de_Parfum_con_fondo.webp?v=1784811615&width=2048",
    disponible: true
  },
  {
    marca: "CAROLINA HERRERA",
    nombre: "Bad Boy",
    imagen: "https://sp701.liverpool.com.mx/i/1104522412.jpg",
    disponible: false
  },
  {
    marca: "VALENTINO",
    nombre: "Born in Roma Intense",
    imagen: "https://fimgs.net/mdimg/perfume-thumbs/375x500.78740.jpg",
    disponible: false
  },
  {
    marca: "RABANNE",
    nombre: "1 Million",
    imagen: "https://medias.rabanne.com/cdn-cgi/image/width=700,quality=90,format=auto/https://medias.rabanne.com/medias/sys_master/images/h4b/hb6/11035934162974/11035934097438/11035934097438.png",
    disponible: false
  },
  {
    marca: "JEAN PAUL GAULTIER",
    nombre: "Le Male Elixir",
    imagen: "https://sp701.liverpool.com.mx/i/1138944090_4p.jpg",
    disponible: false
  }
];

// CONTENEDOR DE PRODUCTOS
const productos = document.getElementById("productos");

// CREAR ENLACE DE WHATSAPP
function crearEnlace(nombrePerfume) {
  const mensaje =
    `Hola, me interesa el perfume ${nombrePerfume}. ` +
    "Quisiera información sobre la presentación de 5 ml. " +
    "¿Está disponible?";

  return `https://wa.me/${TELEFONO}?text=${encodeURIComponent(mensaje)}`;
}

// MOSTRAR DISPONIBILIDAD
function mostrarDisponibilidad(perfume, tarjeta) {
  const stock = tarjeta.querySelector(".stock");
  const compra = tarjeta.querySelector(".buy");

  if (perfume.disponible) {
    stock.textContent = "Disponible";
    stock.classList.add("disponible");
    stock.classList.remove("agotado");

    compra.textContent = "WHATSAPP · COMPRAR";
    compra.href = crearEnlace(perfume.nombre);
    compra.classList.remove("deshabilitado");
    compra.target = "_blank";
    compra.rel = "noopener noreferrer";

    compra.removeAttribute("aria-disabled");
  } else {
    stock.textContent = "Agotado";
    stock.classList.add("agotado");
    stock.classList.remove("disponible");

    compra.textContent = "PRODUCTO AGOTADO";
    compra.removeAttribute("href");
    compra.classList.add("deshabilitado");
    compra.setAttribute("aria-disabled", "true");
  }
}

// CREAR TARJETAS DE PRODUCTOS
if (productos) {

  perfumes.forEach((perfume) => {

    const tarjeta = document.createElement("article");
    tarjeta.className = "product";

    tarjeta.innerHTML = `
      <div class="photo">
        <img
          src="${perfume.imagen}"
          alt="${perfume.marca} ${perfume.nombre}"
          loading="lazy"
        >
      </div>

      <div class="info">

        <div class="brand">${perfume.marca}</div>

        <h3>${perfume.nombre}</h3>

        <p class="stock">Consultar disponibilidad</p>

        <div class="sizes">

          <div class="size">
            5 ml
            <span class="price">100 MX</span>
          </div>

          <a
            class="buy"
            href="${crearEnlace(perfume.nombre)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHATSAPP · COMPRAR
          </a>

        </div>

      </div>
    `;

    productos.appendChild(tarjeta);

    mostrarDisponibilidad(perfume, tarjeta);

  });

}

// BOTÓN GENERAL DE WHATSAPP
const contacto = document.getElementById("contactoWhats");

if (contacto) {
  contacto.href = crearEnlace("la colección TADESHOP");
  contacto.target = "_blank";
  contacto.rel = "noopener noreferrer";
}
