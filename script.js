let menuVisible = false;

function showHideMenu() {
  const nav = document.getElementById("nav");
  const header = document.getElementById("header");
  if (menuVisible) {
    nav.classList.remove("responsive");
    header.style.backdropFilter = "blur(10px)";
    header.style.webkitBackdropFilter = "blur(10px)";
    header.style.backgroundColor = "transparent";
    menuVisible = false;
  } else {
    nav.classList.add("responsive");
    header.style.backdropFilter = "none";
    header.style.webkitBackdropFilter = "none";
    header.style.backgroundColor = "white";
    menuVisible = true;
  }
}

function selectMenuItem() {
  const nav = document.getElementById("nav");
  const header = document.getElementById("header");
  nav.classList.remove("responsive");
  header.style.backdropFilter = "blur(10px)";
  header.style.webkitBackdropFilter = "blur(10px)";
  header.style.backgroundColor = "transparent";
  let checkbox = document.getElementById("menu-toggle");
  checkbox.checked = false;
  menuVisible = false;
}
