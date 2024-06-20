let menuVisible = false;

const redirectIfNeeded = () => {
  if (!sessionStorage.getItem("langRedirected")) {
    const userLang = navigator.language || navigator.userLanguage;
    const currentPath = window.location.pathname;

    if (userLang.startsWith("es") && !currentPath.includes("proyectos") && !currentPath.includes("projects")) {
      window.location.href = "/es";  
    }

    sessionStorage.setItem("langRedirected", "true");
  }
};

function showHideMenu() {
  const nav = document.getElementById("nav");
  const header = document.getElementById("header");
  nav.classList.toggle("responsive");
  const isResponsive = nav.classList.contains("responsive");
  header.style.backdropFilter = isResponsive ? "none" : "blur(10px)";
  header.style.webkitBackdropFilter = isResponsive ? "none" : "blur(10px)";
  header.style.backgroundColor = isResponsive ? "white" : "transparent";
  menuVisible = isResponsive;
}

function selectMenuItem(section) {
  event.preventDefault();
  scrollFunction(section);
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

function scrollFunction(section) {
  const nav = document.querySelector("nav");
  const yOffset = -nav.offsetHeight + 1;
  const element = document.getElementById(section);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function showLanguageMenu() {
  const languageOptions = document.getElementById("language-options");
  if (languageOptions.classList.contains("show")) {
    setTimeout(function () {
      languageOptions.classList.remove("show");
      languageOptions.classList.add("hide");
    }, 10);
    setTimeout(function () {
      languageOptions.style.display = "none";
    }, 110);
  } else {
    languageOptions.style.display = "flex";
    setTimeout(function () {
      languageOptions.classList.remove("hide");
      languageOptions.classList.add("show");
    }, 10);
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function changeLanguage(langCode) {
  const url = langCode === "es" ? "es" : "/";
  window.location.href = url;
}

function redirect(location) {
  window.location.href = location;
}

const updateCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").innerHTML = currentYear;
};

redirectIfNeeded();
window.onload = updateCurrentYear;
