

document.addEventListener("DOMContentLoaded", function () {
  const toggleModeButton = document.getElementById("toggle-mode");
  const htmlElement = document.querySelector("html");

  toggleModeButton.addEventListener("click", function () {
    htmlElement.classList.toggle("light");
  });
});
