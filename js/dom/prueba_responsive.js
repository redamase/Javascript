/** @format */

const d = document,
  w = window;
export default function responsiveTester(id) {
  const $form = d.getElementById(id);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = w.open(
        $form.direccion.value,
        "tester",
        `innerWidth = ${$form.ancho.value}, innerHeight = ${$form.alto.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}
