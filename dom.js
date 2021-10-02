/** @format */

document.documentElement.lang = "EN";

// const $linkDom = document.querySelector(".link-dom");
// $linkDom.setAttribute("target", "_blank");
// $linkDom.setAttribute("rel", "noopener");

// //Data Attributes

// console.log($linkDom.getAttribute("data-description"));
// console.log($linkDom.dataset);
// console.log($linkDom.dataset.description);

// $linkDom.setAttribute("data-description", "Modelo de objeto del Documento");
// console.log($linkDom.dataset.description);

// const $linkDom1 = document.querySelector(".link-dom");

// console.log($linkDom1.style.color);
// console.log(window.getComputedStyle($linkDom1).getPropertyValue("color"));

// $linkDom1.style.setProperty("text-decoration", "none");
// $linkDom1.style.setProperty("display", "block");
// $linkDom1.style.textAlign = "center";
// $linkDom1.style.width = "50%";
// $linkDom1.style.marginLeft = "auto";
// $linkDom1.style.marginRight = "auto";
// $linkDom1.style.padding = "1rem";
// $linkDom1.style.borderRadius = ".5rem";

// console.log($linkDom1.style);

// //Variables CSS / Custom Properties CSS

// const $html = document.documentElement,
//   $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//   varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color", "#000");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
// $body.style.setProperty("background-color", varDarkColor);
// const $card = document.querySelector(".card");

// $card.classList.add("rotate-45");
// $card.classList.remove("rotate-45");
// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45", "rotate-135");

// $card.listName("opacity-80", "sepia");

// const $whatIsDOM = document.getElementById("que-es");

// let text = `<p>Hola mundo</p>`;

// $whatIsDOM.innerText = text;
// $whatIsDOM.textContent = text;
// $whatIsDOM.innerHTML = text;
// $whatIsDOM.outerHTML = text;
// const $cards = document.querySelector(".cards");
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);

// const $figure = document.createElement("figure"),
//   $img = document.createElement("img"),
//   $figcaption = document.createElement("figcaption"),
//   $figcaptionText = document.createTextNode("Animals"),
//   $cards = document.querySelector(".cards"),
//   $figure2 = document.createElement("figure");

// $img.setAttribute("src", "https://placeimg.com/200/200/animals");
// $img.setAttribute("alt", "Animal");
// $figure.classList.add("card");

// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);

// $cards.appendChild($figure);

// $figure2.innerHTML = `
// <img src="https://placeimg.com/200/200/nature" alt="Nature">
// <figcaption>Nature</figcaption>`;

// $figure2.classList.add("card");

// $cards.appendChild($figure2);

// const estaciones = ["primavera", "otoño", "verano", "invieno"],
//   $ul = document.createElement("ul");

// document.write("<h3>Estaciones del año</h3>");
// document.body.appendChild($ul);

// estaciones.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $ul.appendChild($li);
// });

// const continentes = ["africa", "america", "asia", "europa", "oceania"],
//   $ul2 = document.createElement("ul");

// document.write("<h3>Continentes del mundo</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";
// continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// const $cards = document.querySelector(".cards"),
//   $template = document.getElementById("template-card").content,
//   $fragment = document.createDocumentFragment(),
//   cardContent = [
//     {
//       title: "Tecnologia",
//       img: "https://placeimg.com/200/200/tech",
//     },
//     {
//       title: "Animales",
//       img: "https://placeimg.com/200/200/animals",
//     },
//     {
//       title: "Naturaleza",
//       img: "https://placeimg.com/200/200/nature",
//     },
//     {
//       title: "Personas",
//       img: "https://placeimg.com/200/200/people",
//     },
//     {
//       title: "Arquitectura",
//       img: "https://placeimg.com/200/200/arch",
//     },
//   ];

// cardContent.map((el) => {
//   $template.querySelector("img").setAttribute("src", el.img);
//   $template.querySelector("img").setAttribute("alt", el.title);
//   $template.querySelector("figcaption").textContent = el.title;
//   let $clone = document.importNode($template, true);
//   $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);

// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure");

// $contentCard = `
//   <img src = "https://placeimg.com/200/200/any" alt="Any">
//   <figcaption></figcaption>`;
// $newCard.classList.add("card");

// $newCard.insertAdjacentHTML("afterbegin", $contentCard);
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "ANY");
// $cards.insertAdjacentElement("beforeend", $newCard);

// const saludar = (nombre = "desconocid@") => {
//   alert(`Hola ${nombre}`);
// };

// const holaMundo = () => {
//   alert("hola Mundo");
// };

// const $eventSemantic = document.getElementById("event-semantic");
// const $eventMultiple = document.getElementById("event-multiple");
// const $eventRemove = document.getElementById("event-remove");

// $eventSemantic.onclick = holaMundo;

// $eventMultiple.addEventListener("click", holaMundo);
// $eventMultiple.addEventListener("click", (e) => {
//   alert("Manejador de eventos multiples");
//   console.log(e.target);
//   console.log(e.type);
// });
// $eventMultiple.addEventListener("click", () => {
//   saludar();
//   saludar("David");
// });

// const removerDobleClick = (e) => {
//   alert(`removiendo el evento ${e.type}`);
//   $eventRemove.removeEventListener("dblclick", removerDobleClick);
// };

// $eventRemove.addEventListener("dblclick", removerDobleClick);
// const $divEventos = document.querySelectorAll(".eventos-flujo div"),
//   $linkEventos = document.querySelector(".eventos-flujo a");

// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this}, el click lo origino ${e.target.className}`
//   );
//   // e.stopPropagation();
// }
// document.addEventListener("click", (e) => {
//   if (e.target.matches(".eventos-flujo div")) {
//   }
//   flujoEventos(e);

//   if (e.target.matches(".eventos-flujo a")) {
//     alert("hola");
//     e.preventDefault();
//   }
// });
// $divEventos.forEach((div) => {
//   //fase de burbuja
//   div.addEventListener("click", flujoEventos, false);
//   // div.addEventListener("click", flujoEventos);
//   // fase de captura
//   // div.addEventListener("click", flujoEventos, true);

//   // div.addEventListener("click", flujoEventos, {
//   //   captured: false,
//   //   once: true,
//   // });
// });

// $linkEventos.addEventListener("click", () => {
//   alert("hola");
//   e.preventDefault();
// });
// window.addEventListener("resize", (e) => {
//   console.clear();
//   console.log("*****Evento resize*****");
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
//   console.log(window.outerHeight);
//   console.log(window.outerWidth);

//   console.log(e);
// });

// window.addEventListener("scroll", (e) => {
//   console.clear();
//   console.log("*****Evento scroll*********");
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });

// const $btnAbrir = document.getElementById("abrir-ventana"),
//   $btnCerrar = document.getElementById("cerrar-ventana"),
//   $btnImprimir = document.getElementById("imprimir-ventana");
// let ventana = undefined;

// $btnAbrir.addEventListener("click", (e) => {
//   ventana = window.open("https://google.com");
// });
// $btnCerrar.addEventListener("click", (e) => {
//   ventana.close();
// });
// $btnImprimir.addEventListener("click", (e) => {
//   window.print();
// });

// console.log("********** Objeto URL ***********");
// console.log(location);
// console.log(location.http);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.search);
// console.log(location.pathname);

// console.log("**********History*********");
// console.log(history);
// console.log(history.length);
// console.log(history.back(3));
// console.log(history.forward(3));
// console.log(history.go());

// console.log("**********Objeti navegador (Navigator)*********");
// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);
