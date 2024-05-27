document.addEventListener("DOMContentLoaded", () => {
  const number = document.getElementById("h1");
  const plusButton = document.getElementById("inc");
  const resetButton = document.getElementById("reset");

  let count = 0;

  plusButton.addEventListener("click", () => {
    count++;
    number.innerHTML = count;
  });
  resetButton.addEventListener("click", () => {
    count = 0;
    number.innerHTML = 0;
  });
});
