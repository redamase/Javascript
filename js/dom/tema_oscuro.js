/** @format */
import { shortcuts, moveBall } from "../dom/teclados.js";
const d = document,
  ls = localStorage;
export default function darkTheme(btn, classDark, stage, ball) {
  const $themeBtn = d.querySelector(btn),
    $stage = d.querySelector(stage),
    $ball = d.querySelector(ball),
    $selectors = d.querySelectorAll("[data-dark]");
  let moon = "🌙",
    sun = "☀️";
  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $stage.classList.add("stage");
    $stage.classList.remove("dark-stage");
    $ball.classList.add("ball");
    $ball.classList.remove("dark-ball");
    $themeBtn.textContent = moon;
    ls.setItem("myThemeJS", "light");
  };
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $stage.classList.remove("stage");
    $stage.classList.add("dark-stage");
    $ball.classList.remove("ball");
    $ball.classList.add("dark-ball");
    $themeBtn.textContent = sun;
    ls.setItem("myThemeJS", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("myThemeJS") === null) ls.setItem("myThemeJS", "light");
    if (ls.getItem("myThemeJS") === "light") lightMode();
    if (ls.getItem("myThemeJS") === "dark") darkMode();
    if (ls.getItem("myThemeJS") === "light") {
      d.addEventListener("keydown", (e) => {
        shortcuts(e);
        moveBall(e, ".ball", ".stage");
      });
    }
    if (ls.getItem("myThemeJS") === "dark") {
      d.addEventListener("keydown", (e) => {
        shortcuts(e);
        moveBall(e, ".dark-ball", ".dark-stage");
      });
    }
  });
}
