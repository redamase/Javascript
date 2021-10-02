/** @format */
const w = window,
	d = document;
export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
	let breakpoint = w.matchMedia(mq);
	// console.log(mq);
	const responsive = (e) => {
		if (e.matches) {
			d.getElementById(id).innerHTML = desktopContent;
		} else {
			d.getElementById(id).innerHTML = mobileContent;
		}
	};
	breakpoint.addEventListener("change", responsive);
	responsive(breakpoint);
}
