/** @format */
const d = document,
  n = navigator,
  ua = n.userAgent;
export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      // dispositivos andoriod
      // i-> no importa si esta en mayusaculas o minusculas
      android: () => navigator.userAgent.match(/android/i),
      ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
      windows: () => navigator.userAgent.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => navigator.userAgent.match(/linux/i),
      mac: () => navigator.userAgent.match(/mac os/i),
      windows: () => navigator.userAgent.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => navigator.userAgent.match(/chrome/i),
      safarai: () => navigator.userAgent.match(/safarai/i),
      firefox: () => navigator.userAgent.match(/firefox/i),
      opera: () => navigator.userAgent.match(/opera|opera mini/i),
      ie: () => navigator.userAgent.match(/msie|iemobile/i),
      edge: () => navigator.userAgent.match(/edge|edg/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safarai() ||
          this.firefox() ||
          this.opera()
        );
      },
    };
  $id.innerHTML = `
    <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>`;
  /*Validaciones exclusivas */
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Contenido exclusivo en chrome</mark></p>`;
  }
  if (isBrowser.edge()) {
    $id.innerHTML += `<p><mark>Contenido exclusivo en edge</mark></p>`;
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Contenido exclusivo en linux</mark></p>`;
  }
}
