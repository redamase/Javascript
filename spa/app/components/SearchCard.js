/** @format */

export function SearchCard(props) {
	let { title, _embedded, id } = props;
	let slug = _embedded.self[0].slug;
	document.addEventListener("click", (e) => {
		if (!e.target.matches(".post-card a")) return false;
		localStorage.setItem("wpPostId", e.target.dataset.id);
	});
	return `
    <article class="post-card">
    <h2>${title}</h2>
    <p>
    <a href="#/${slug}" data-id="${id}">Ver publicacion</a>
    </p>
    </article>
    `;
}
