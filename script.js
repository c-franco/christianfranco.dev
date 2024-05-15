let menuVisible = false;

const navScroll = document.querySelector("#header");
const navMenuScroll1 = document.querySelector(".li-menu1");
const navMenuScroll2 = document.querySelector(".li-menu2");
const navMenuScroll3 = document.querySelector(".li-menu3");
const navMenuScroll4 = document.querySelector(".li-menu4");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navScroll.classList.add("nav-scrolled");
    navMenuScroll1.classList.add("nav-responsive-scrolled");
    navMenuScroll2.classList.add("nav-responsive-scrolled");
    navMenuScroll3.classList.add("nav-responsive-scrolled");
    navMenuScroll4.classList.add("nav-responsive-scrolled");
  } else if (window.scrollY <= 200) {
    navScroll.classList.remove("nav-scrolled");
    navMenuScroll1.classList.remove("nav-responsive-scrolled");
    navMenuScroll2.classList.remove("nav-responsive-scrolled");
    navMenuScroll3.classList.remove("nav-responsive-scrolled");
    navMenuScroll4.classList.remove("nav-responsive-scrolled");
  }
});

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
