
"use strict";

/* =================================
   CONFIGURACIÓN DE TADESHOP
================================= */

const TELEFONO = "7221810317";

const PRECIO_ORIGINAL = 130;
const DESCUENTO = 30;

const PRECIO_FINAL = Math.round(
  PRECIO_ORIGINAL * (1 - DESCUENTO / 130)
);

/* =================================
   COLECCIÓN DE PERFUMES

   CAMBIA MANUALMENTE LAS CANTIDADES
   0 = AGOTADO
================================= */

const perfumes = [

  {
    marca: "Armaf",
    nombre: "Odyssey Homme Eau de Parfum",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTmOIfjTdSMgvbbhQQBO4nzAKXx_YHSgtUpPmUaKsLAkvSLyZgQWXuHc&s=10",
    disponibles: 15
  },

  {
    marca: "Rasasi",
    nombre: "Hawas Tropical",
    imagen: "https://fragarabic.com/cdn/shop/files/hawas-tropical-rasasi-06-creativa.webp?v=1793400050&width=2048",
    disponibles: 0
  },

  {
    marca: "Afnan",
    nombre: "9PM",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3RZnfciMy4bUoJthXlBzZ0oXdEFSHDfkuP6bTSr-yJy1yB1ZXQWKamki&s=10",
    disponibles: 15
  },

  {
    marca: "Armaf",
    nombre: "Odyssey Aqua",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AV_PPaiyCGoYGRToqDeoFBqGFvFLsdWEIT3zrDNtoK7x2DtRdDT3hAxt&s=10",
    disponibles: 0
  },

  {
    marca: "Lattafa",
    nombre: "Eclaire Lattafa",
    imagen: "https://aspik.mx/cdn/shop/files/lat-4298-eclaire-6.jpg?v=1791793938",
    disponibles: 13
  },

  {
    marca: "Armaf",
    nombre: "Armaf Club de Nuit Intense Man",
    imagen: "https://azaharlenceria.com/files/product_images/2026/07/20/CDN%20INTENSE-1.png",
    disponibles: 0
  },

  {
    marca: "Lattafa",
    nombre: "Lattafa Rave Pink Women",
    imagen: "https://static2.sabinacdn.com/154414/lattafa-rave-now-for-women-eau-de-parfum.jpg",
    disponibles: 0
  },

  {
    marca: "Rasasi",
    nombre: "hawas malibu",
    imagen: "https://m.media-amazon.com/images/I/717l45UEDqL.jpg",
    disponibles: 0
  }

];

/* =================================
   ENLACES DE WHATSAPP
================================= */

function crearEnlace(nombrePerfume) {

  const mensaje =
    `Hola, me interesa el perfume ${nombrePerfume} ` +
    `en presentación de 5 ml con el descuento del ${DESCUENTO}%. ` +
    `¿Podría darme información para realizar mi pedido?`;

  return `https://wa.me/${TELEFONO}?text=${encodeURIComponent(mensaje)}`;

}

/* =================================
   CREAR TARJETA DE PRODUCTO
================================= */

function crearTarjeta(perfume) {

  const tarjeta = document.createElement("article");

  tarjeta.className = "product";

  const foto = document.createElement("div");
  foto.className = "photo";

  const imagen = document.createElement("img");

  imagen.src = perfume.imagen;
  imagen.alt = `${perfume.marca} ${perfume.nombre}`;
  imagen.loading = "lazy";

  foto.appendChild(imagen);

  const etiqueta = document.createElement("span");

  etiqueta.className = "product-discount";
  etiqueta.textContent = `-${DESCUENTO}%`;

  foto.appendChild(etiqueta);

  const info = document.createElement("div");
  info.className = "info";

  const marca = document.createElement("div");

  marca.className = "brand";
  marca.textContent = perfume.marca;

  const nombre = document.createElement("h3");

  nombre.textContent = perfume.nombre;

  const stock = document.createElement("p");

  stock.className = "stock";

  const sizes = document.createElement("div");

  sizes.className = "sizes";

  const size = document.createElement("div");

  size.className = "size";

  const presentacion = document.createElement("span");

  presentacion.textContent = "PRESENTACIÓN DE 5 ML";

  const precioAnterior = document.createElement("span");

  precioAnterior.className = "price-old";
  precioAnterior.textContent =
    `$${PRECIO_ORIGINAL} MXN`;

  const precioFinal = document.createElement("span");

  precioFinal.className = "price";
  precioFinal.textContent =
    `$${PRECIO_FINAL} MXN`;

  const nota = document.createElement("span");

  nota.className = "price-note";
  nota.textContent = `PRECIO CON ${DESCUENTO}% DE DESCUENTO`;

  size.append(
    presentacion,
    precioAnterior,
    precioFinal,
    nota
  );

  const compra = document.createElement("a");

  compra.className = "buy";

  compra.textContent = "WHATSAPP · COMPRAR";

  sizes.append(size, compra);

  info.append(
    marca,
    nombre,
    stock,
    sizes
  );

  tarjeta.append(foto, info);

  /* =================================
     CONTROL DE DISPONIBILIDAD
  ================================= */

  if (perfume.disponibles > 0) {

    stock.textContent = `Disponibles: ${perfume.disponibles}`;
    stock.classList.add("disponible");

    compra.href = crearEnlace(perfume.nombre);
    compra.target = "_blank";
    compra.rel = "noopener noreferrer";

  } else {

    stock.textContent = "Agotado";
    stock.classList.add("agotado");

    compra.textContent = "PRODUCTO AGOTADO";
    compra.classList.add("deshabilitado");

    compra.setAttribute("aria-disabled", "true");
    compra.removeAttribute("href");

  }

  return tarjeta;

}

/* =================================
   MOSTRAR COLECCIÓN
================================= */

const productos = document.getElementById("productos");

if (productos) {

  perfumes.forEach((perfume) => {

    const tarjeta = crearTarjeta(perfume);

    productos.appendChild(tarjeta);

  });

}

/* =================================
   BOTÓN GENERAL DE CONTACTO
================================= */

const contacto = document.getElementById("contactoWhats");

if (contacto) {

  contacto.href = crearEnlace("la colección completa TADESHOP");

  contacto.target = "_blank";

  contacto.rel = "noopener noreferrer";

}
