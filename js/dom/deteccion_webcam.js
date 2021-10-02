/** @format */
const d = document,
	n = navigator;
export default function webcam(id) {
	const $video = d.getElementById(id);
	if (n.mediaDevices.getUserMedia) {
		n.mediaDevices
			.getUserMedia({ video: true })
			.then((stream) => {
				console.log(stream);
				$video.srcObject = stream;
				$video.play();
			})
			.catch((err) => {
				$video.insertAdjacentHTML(
					"beforebegin",
					`<p><mark>Ocurrio un error:${err}</mark></p>`
				);
				// console.log(`Ocurrio un error: ${err}`);
			});
	}
}
