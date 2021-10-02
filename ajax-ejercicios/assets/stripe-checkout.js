/** @format */
import STRIPE_KEYS from "./stripe-keys.js";
const d = document,
	$tacos = d.getElementById("tacos"),
	$template = d.getElementById("taco-template").content,
	$fragment = d.createDocumentFragment(),
	fetchOptions = {
		headers: {
			Authorization: `Bearer ${STRIPE_KEYS.key_secret}`,
		},
	};
let prices, products;

const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`;

Promise.all([
	fetch("https://api.stripe.com/v1/prices", fetchOptions),
	fetch("https://api.stripe.com/v1/products", fetchOptions),
])
	.then((responses) => Promise.all(responses.map((res) => res.json())))
	.then((json) => {
		products = json[1].data;
		prices = json[0].data;

		prices.forEach((el) => {
			let producData = products.filter((product) => product.id === el.product);
			//console.log(producData);

			$template.querySelector(".taco").setAttribute("data-price", el.id);
			$template.querySelector("img").src = producData[0].images[0];
			$template.querySelector("img").alt = producData[0].name;
			$template.querySelector("figcaption").innerHTML = `${
				producData[0].name
			} <br>
            ${moneyFormat(el.unit_amount_decimal)} ${el.currency}`;

			let clone = d.importNode($template, true);

			$fragment.appendChild(clone);
		});
		$tacos.appendChild($fragment);
	})
	.catch((error) => {
		//console.error(error);
		let msg = error.statusText || "Ocurrió un error";
		$tacos.innerHTML = `<p>Error ${error.status}: ${msg}</p>`;
	});

d.addEventListener("click", (e) => {
	if (e.target.matches(".taco *")) {
		let price = e.target.parentElement.getAttribute("data-price");
		Stripe(STRIPE_KEYS.key_public)
			.redirectToCheckout({
				lineItems: [{ price, quantity: 1 }],
				mode: "subscription",
				successUrl:
					"http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-success.html",
				cancelUrl:
					"http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-cancel.html",
			})
			.the((res) => {
				console.log(res);
				if (res.error) {
					$tacos.insertAdjacentHTML("afterend", res.error.message);
				}
			});
	}
});
