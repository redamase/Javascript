/** @format */

const d = document,
  n = navigator,
  w = window;

export default function networkStatus() {
  const isOnLine = () => {
    const $div = d.createElement("div");
    if (n.onLine) {
      $div.textContent = "Conexión Reestablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Conexión Perdida";
      $div.classList.remove("online");
      $div.classList.add("offline");
    }
    d.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => d.body.removeChild($div), 2000);
  };
  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());
}
