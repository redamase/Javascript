/** @format */
const d = document,
	n = navigator;
export default function getGeolocation(id) {
	const $id = d.getElementById(id),
		options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};
	const success = (position) => {
		// console.log(position);
		let coords = position.coords;
		$id.innerHTML = `<p>Tu posicion actual es: 
    <ul>
    <li>Laitud <b>${coords.latitude}</b></li>
    <li>Longitud <b>${coords.longitude}</b></li>
    <li>Presición <b>${coords.accuracy}</b></li>
    </ul></p>
    <a href="https://www.google.com.mx/maps/"${coords.latitude}/${coords.longitude},
    20z target="_blank" rel="noopener">Ver on Google maps</a>`;
	};
	const error = (error) => {
		$id.innerHTML = `<p><mark>Error ${error.code}: ${error.message}</mark></p>`;
		// console.log(`Error ${error.code}: ${error.message}`);
	};
	n.geolocation.getCurrentPosition(success, error, options);
}
