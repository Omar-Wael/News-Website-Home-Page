document.getElementById("side-menu").addEventListener("click", show);
document.getElementById("icon").addEventListener("click", hide);
const navBar = document.getElementById("ul");
function show() {
  const cover = document.getElementById("cover");
  const navBar = document.getElementById("ul");
  navBar.style.display = "flex";
  cover.style.display = "flex";
}
function hide() {
  const cover = document.getElementById("cover");
  const navBar = document.getElementById("ul");
  navBar.style.display = "none";
  cover.style.display = "none";
}
