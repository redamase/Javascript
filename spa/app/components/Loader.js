/** @format */

export function Loader() {
	const $loader = document.createElement("img");

	$loader.src = "app/assets/ajax-loader-gif-13.gif";
	$loader.alt = "Cargando...";
	$loader.classList.add("loader");
	return $loader;
}
