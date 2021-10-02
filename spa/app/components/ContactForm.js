/** @format */

export function ContactForm() {
	const d = document,
		$form = d.createElement("form"),
		$styles = d.getElementById("dynamic-styles");

	$form.classList.add("contact-form");

	$styles.innerHTML = `html {
        box-sizing: border-box;
        font-family: sans-serif;
        font-size: 16px;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    .contact-form {
        --form-ok-color: #4caf50;
        --form-error-color: #f44336;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }

    .contact-form > * {
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        width: 100%;
    }

    .contact-form textarea {
        resize: none;
    }

    .contact-form legend,
    .contact-form-response {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }

    .contact-form input,
    .contact-form textarea {
        font-size: 1rem;
        font-family: sans-serif;
    }

    .contact-form input[type="submit"] {
        width: 50%;
        font-weight: bold;
        cursor: pointer;
    }

    .contact-form *::placeholder {
        color: #000;
    }

    .contact-form [required]:valid {
        border: thin solid var(--form-ok-color);
    }

    .contact-form [required]:invalid {
        border: thin solid var(--form-error-color);
    }

    .contact-form-error {
        margin-top: -1rem;
        font-size: 80%;
        background-color: var(--form-error-color);
        color: #fff;
        transition: all 800ms ease;
    }

    .contact-form-error.is-active {
        display: block;
        animation: show-message 1s 1 normal 0s ease-out both;
    }

    .none {
        display: none;
    }

    .contact-form-loader {
        text-align: center;
    }
    @keyframes show-message {
        0% {
            visibility: hidden;
            opacity: 0;
        }

        100% {
            visibility: visible;
            opacity: 1;
        }
    }`;

	$form.innerHTML = `<legend>Envianos tus comentarios</legend>
    <input
        type="text"
        name="name"
        placeholder="Escribe tu nombre"
        required
        title="El nombre sólo acepta letras y espacios en blanco"
        pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
    />
    <input
        type="email"
        name="email"
        required
        placeholder="Escribe tu email"
        title="Email incorrecto"
        pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
    />
    <input
        type="text"
        name="subject"
        placeholder="Asunto a tratar"
        required
        title="El asunto es requerido"
    />
    <textarea
        name="comments"
        cols="50"
        rows="5"
        required
        placeholder="Escribe tus comentarios"
        data-pattern="^.{1,255}$"
        title="Tu comentario no debe exceder los 255 caracteres"
    ></textarea>
    <button type="submit">Enviar</button>
    <div class="contact-form-loader none">
        <img src="../assets/ajax-loader-gif-13.gif" alt="cargando" />
    </div>
    <div class="contact-form-response none">
        <p>Los Datos han sido enviados</p>
    </div>`;

	function validationsForm() {
		const $form = d.querySelector(".contact-form"),
			$inputs = d.querySelectorAll(".contact-form [required]");

		$inputs.forEach((input) => {
			const $span = d.createElement("span");
			$span.id = input.name;
			$span.textContent = input.title;
			$span.classList.add("contact-form-error", "none");
			input.insertAdjacentElement("afterend", $span);
		});
		d.addEventListener("keyup", (e) => {
			if (e.target.matches(".contact-form [required]")) {
				let $input = e.target,
					pattern = $input.pattern || $input.dataset.pattern;
				if (pattern && $input.value !== "") {
					let regex = new RegExp(pattern);
					return !regex.exec($input.value)
						? d.getElementById($input.name).classList.add("is-active")
						: d.getElementById($input.name).classList.remove("is-active");
				}
				if (!pattern) {
					return $input.value === ""
						? d.getElementById($input.name).classList.add("is-active")
						: d.getElementById($input.name).classList.remove("is-active");
				}
			}
		});
		d.addEventListener("submit", (e) => {
			e.preventDefault();
			alert("Enviando Formulario");
			const $loader = d.querySelector(".contact-form-loader"),
				$response = d.querySelector(".contact-form-response");

			$loader.classList.remove("none");
			fetch("https://formsubmit.co/ajax/redamase24@gmail.com", {
				method: "POST",
				body: new FormData(e.target),
			})
				.then((res) => (res.ok ? res.json() : Promise.reject(res)))
				.then((json) => {
					console.log(json);
					$loader.classList.add("none");
					$response.classList.remove("none");
					$response.innerHTML = `<p>${json.message}</p>`;
					$form.reset();
				})
				.catch((err) => {
					console.log(err);
					let msg = err.statusText || "Ocurrió un error";
					$response.innerHTML = `<p>Error ${err.status}: ${msg}</p>`;
				})
				.finally(() =>
					setTimeout(() => {
						$response.classList.add("none");
						$response.innerHTML = "";
					}, 3000)
				);
			// setTimeout(() => {
			// 	$loader.classList.add("none");
			// 	$response.classList.remove("none");
			// 	$form.reset();
			// 	;
		});
	}

	setTimeout(() => validationsForm(), 100);

	return $form;
}
