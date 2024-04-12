
function moveRandomEl(elm) {
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#btn");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
