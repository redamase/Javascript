/** @format */

(() => {
	const xhr = new XMLHttpRequest(),
		$xhr = document.getElementById("xhr"),
		$fragment = document.createDocumentFragment();

	xhr.addEventListener("readystatechange", (e) => {
		if (xhr.readyState !== 4) return;
		if (xhr.status >= 200 && xhr.status < 300) {
			json = JSON.parse(xhr.responseText);
			json.map((el) => {
				const $li = document.createElement("li");
				$li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
				$fragment.appendChild($li);
			});
			$xhr.appendChild($fragment);
		} else {
			let msg = xhr.statusText || "Ocurrió un error";
			$xhr.innerHTML = `Error ${xhr.status}: ${msg}`;
		}
	});

	xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

	xhr.send();
})();

(() => {
	const $fetch = document.getElementById("fetch"),
		$fragment = document.createDocumentFragment();

	fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => {
			return res.ok ? res.json() : Promise.reject(res);
		})
		.then((json) => {
			json.map((el) => {
				const $li = document.createElement("li");
				$li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
				$fragment.appendChild($li);
			});
			$fetch.appendChild($fragment);
		})
		.catch((err) => {
			let msg = err.message || "Ocurrió un error";
			$fetch.innerHTML = `Error ${err.status}: ${msg}`;
		})
		.finally(() => {});
})();

(() => {
	const $fetchAsync = document.getElementById("fetch-async"),
		$fragment = document.createDocumentFragment();

	async function getData() {
		try {
			let res = await fetch("https://jsonplaceholder.typicode.com/users"),
				json = await res.json();

			if (!res.ok) throw { status: res.status, statusText: res.statusText };
			json.map((el) => {
				const $li = document.createElement("li");
				$li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
				$fragment.appendChild($li);
			});
			$fetchAsync.appendChild($fragment);
		} catch (err) {
			let msg = err.statusText || "Ocurrió un error";
			$fetchAsync.innerHTML = `Error ${err.status}: ${msg}`;
		} finally {
		}
	}
	getData();
})();

(() => {
	const $axios = document.getElementById("axios"),
		$fragment = document.createDocumentFragment();

	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((res) => {
			json = res.data;
			json.map((el) => {
				const $li = document.createElement("li");
				$li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
				$fragment.appendChild($li);
			});
			$axios.appendChild($fragment);
		})
		.catch((err) => {
			let msg = err.response.statusText || "Ocurrió un error";
			$axios.innerHTML = `Error ${err.response.status}: ${msg}`;
		})
		.finally();
})();

(() => {
	const $axiosAsync = document.getElementById("axios-async"),
		$fragment = document.createDocumentFragment();

	async function getAxios() {
		try {
			let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
				json = await res.data;
			json.map((el) => {
				const $li = document.createElement("li");
				$li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
				$fragment.appendChild($li);
			});
			$axiosAsync.appendChild($fragment);
		} catch (err) {
			let msg = err.response.statusText || "Ocurrió un error";
			$axiosAsync.innerHTML = `Error ${err.response.status}: ${msg}`;
		} finally {
		}
	}

	getAxios();
})();
