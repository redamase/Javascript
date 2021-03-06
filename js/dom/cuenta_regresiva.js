/** @format */

const d = document;
export function countdown(id, limitDate, finallMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $countdown.innerHTML = `<H3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</H3>`;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${finallMessage}</h3>`;
    }
  }, 1000);
}
