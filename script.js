let menuVisible = false;

window.onload = function () {
  const currentYear = new Date().getFullYear();
  //document.getElementById("currentYear").innerHTML = currentYear;

  if (!sessionStorage.getItem("langRedirected")) {
    const userLang = navigator.language || navigator.userLanguage;

    if (userLang.startsWith("es")) {
      window.location.href = "es.html";
    } else {
      window.location.href = "/";
    }

    sessionStorage.setItem("langRedirected", "true");
  }
};

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

function selectMenuItem(section) {
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

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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

function changeLanguage(langCode) {
  if (langCode === "es") {
    window.location.href = "es.html";
  } else {
    window.location.href = "/";
  }
}

function redirect(location) {
  window.location.href = location;
}
