/** @format */

import scrollTopBottom from "../dom/botton_scroll.js";
import { countdown } from "../dom/cuenta_regresiva.js";
import hamburgerMenu from "../dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "../dom/reloj.js";
import responsiveMedia from "../dom/objeto_responsive.js";
import darkTheme from "../dom/tema_oscuro.js";
import responsiveTester from "../dom/prueba_responsive.js";
import userDeviceInfo from "../dom/deteccion_dispositivos.js";
import networkStatus from "../dom/deteccion_red.js";
import webcam from "../dom/deteccion_webcam.js";
import getGeolocation from "../dom/geolocalizacion.js";
import searchFilters from "../dom/filtro_busquedas.js";
import draw from "../dom/sorteo.js";
import slider from "../dom/carrusel.js";
import scrollSpy from "../dom/scroll_espia.js";
import smartVideo from "../dom/video_inteligente.js";
import contactFormValidations from "../dom/validaciones_formulario.js";
import speechReader from "../dom/narrador.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
	hamburgerMenu(".panel-btn", ".panel", ".menu a");
	digitalClock("#reloj", "#iniciar-reloj", "#detener-reloj");
	alarm("/assets/alarma_2.mp3", "#iniciar-alarma", "#detener-alarma");
	countdown(
		"countdown",
		"Sun Jan 30 2022 23:59:59",
		"Feliz Cumpleaños a mí :)"
	);
	scrollTopBottom(".scroll-top-btn");
	responsiveMedia(
		"youtube",
		"(min-width: 1024px)",
		`<a href="https://youtu.be/hT_nvWreIhg">Ver Video </a>`,
		`<iframe width="560" height="315" src="https://www.youtube.com/embed/hT_nvWreIhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
	);
	responsiveMedia(
		"gmaps",
		"(min-width:1024px)",
		`<a href="https://goo.gl/maps/SQnpeCs9VNNejrAd7">Ver Mapa </a>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15047.68189437956!2d-96.97128117084505!3d19.458995289304696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2d1ff54b6401%3A0x53330160ac01e97d!2sMirador%20del%20Cerro%20de%20las%20Culebras!5e0!3m2!1ses-419!2smx!4v1630337848268!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
	);
	responsiveTester("responsive-tester");
	userDeviceInfo("user-device");
	webcam("webcam");
	getGeolocation("geolocation");
	searchFilters(".card-filter", ".card");
	draw("#winner-btn", ".player");
	slider();
	scrollSpy();
	smartVideo();
	contactFormValidations();
});

// d.addEventListener("keydown", (e) => {
//   shortcuts(e);
//   // moveBall(e, ".ball", ".stage");
// });
darkTheme(".dark-theme-btn", "dark-mode", ".stage", ".ball");
networkStatus();
speechReader();
