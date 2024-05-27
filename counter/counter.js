document.addEventListener("DOMContentLoaded", () => {
  const number = document.getElementById("h1");
  const base = document.getElementById("base");
  let slider = document.getElementById("slider");
  const d = document.getElementById("d");
  const minusButton = document.getElementById("dec");
  const plusButton = document.getElementById("inc");
  const resetButton = document.getElementById("reset");

  let count = 0;
  let dx = parseInt(slider.value, 10);
  const centerX = window.innerWidth / 2;
  let x = centerX - number.offsetWidth / 2;

  const baseRect = base.getBoundingClientRect();
  let y = baseRect.top - baseRect.height - 10;

  number.style.left = x + "px";
  number.style.top = y + "px";

  slider.addEventListener("input", () => {
    dx = parseInt(slider.value);
    d.innerHTML = dx;
  });

  minusButton.addEventListener("click", () => {
    count--;
    x -= dx;
    number.innerHTML = count;
    number.style.left = x + "px";
  });

  plusButton.addEventListener("click", () => {
    count++;
    x += dx;
    number.innerHTML = count;
    number.style.left = x + "px";
  });
  resetButton.addEventListener("click", () => {
    count = 0;
    number.innerHTML = 0;
    x = centerX - number.offsetWidth / 2;
    number.style.left = x + "px";
  });
});
