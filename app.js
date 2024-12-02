const explore__btn = document.querySelector(".home__btn");

explore__btn.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  const buttonRect = explore__btn.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const deltaX = clientX - buttonCenterX;
  const deltaY = clientY - buttonCenterY;

  explore__btn.style.transform = `translate(${deltaX * 0.3}px, ${
    deltaY * 0.3
  }px)`;

  explore__btn.style.filter = `drop-shadow(${deltaX * 0.2}px ${
    deltaY * 0.2
  }px 16px rgba(0, 0, 0, 1))`;
});

explore__btn.addEventListener("mouseleave", () => {
  explore__btn.style.transform = "translate(0, 0)";
  explore__btn.style.filter = `drop-shadow(14px 20px 16px rgba(0, 0, 0, 1))`;
});

const nav__btn = document.querySelector(".nav__openMenu");
const showNavMenu = document.querySelector(".resNav");
let navbar = true;

nav__btn.addEventListener("click", () => {
  if (navbar) {
    nav__btn.src = "assets/shared/icon-close.svg";
  } else {
    nav__btn.src = "assets/shared/icon-hamburger.svg";
  }

  showNavMenu.classList.toggle("resNav__active");
  navbar = !navbar;
});

/////////tabs//////////

function showTab(tabId) {
  var tabContents = document.querySelectorAll(".des__details__body");
  tabContents.forEach(function (tabContent) {
    if (tabContent.classList.contains("active")) {
      tabContent.classList.remove("active");
    }
  });
  var img = document.querySelector(".des__img__img > img");
  img.src = `assets/destination/image-${tabId}.png`;
  document.getElementById(tabId).classList.add("active");
}

showTab("moon");

function showCrew(tabID) {
  var tabContents = document.querySelectorAll(".crew_left");
  var crew_tabs = document.querySelectorAll(".crew_tabs > div");

  tabContents.forEach((tabContent) => {
    if (tabContent.classList.contains("crew_left-active")) {
      tabContent.classList.remove("crew_left-active");
    }
  });
  crew_tabs.forEach((tabContent) => {
    if (tabContent.classList.contains("crew_tabs-active")) {
      tabContent.classList.remove("crew_tabs-active");
    }
  });
  var img = document.querySelector(".crew_right > img");
  img.src = `assets/crew/image-${tabID}.png`;
  document.getElementById(tabID).classList.add("crew_left-active");
  document.getElementById(`tab-${tabID}`).classList.add("crew_tabs-active");
}

showCrew("douglas-hurley");

function showTech(tabID) {
  var tabContents = document.querySelectorAll(".tech_first_body");
  var tech_tabs = document.querySelectorAll(".tech_tab");
  console.log(tabContents);

  tabContents.forEach((tabContent) => {
    if (tabContent.classList.contains("tech_active")) {
      tabContent.classList.remove("tech_active");
    }
  });
  tech_tabs.forEach((tabContent) => {
    if (tabContent.classList.contains("tech_tab_active")) {
      tabContent.classList.remove("tech_tab_active");
    }
  });

  var img_port = document.querySelector(".tech_sec_body > .tech_desk");
  var img_land = document.querySelector(".tech_sec_body > .tech_tab");

  img_port.src = `assets/technology/image-${tabID}-portrait.jpg`;
  img_land.src = `assets/technology/image-${tabID}-landscape.jpg`;

  document.getElementById(tabID).classList.add("tech_active");

  document.getElementById(`tab-${tabID}`).classList.add("tech_tab_active");
}

showTech("launch-vehicle");
