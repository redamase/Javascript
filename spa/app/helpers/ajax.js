/** @format */

export async function ajax(props) {
	let { url, cbSuccess } = props;
	//console.log(url);

	await fetch(url).then((res) =>
		(res.ok ? res.json() : Promise.reject(res))
			.then((json) => cbSuccess(json))
			.catch((err) => {
				let msg = err.statusText || "Ocurrió un error";
				document.getElementById(
					"main"
				).innerHTML = `<div class="error"><p>Error ${err.status}: ${msg}</p></div>`;
				document.querySelector(".loader").style.display = "none";
				console.error(err);
			})
	);
}
