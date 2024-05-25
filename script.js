let menuVisible = false;

function showHideMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function selectMenuItem() {
  document.getElementById("nav").classList = "";
  let checkbox = document.getElementById("menu-toggle");
  checkbox.checked = false;
  menuVisible = false;
}
