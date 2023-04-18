const searchEL = document.querySelector(".search");
const searchInputEL = searchEL.querySelector("input");

searchEL.addEventListener("click", function () {
  searchInputEL.focus();
});

searchInputEL.addEventListener("focus", function () {
  searchEL.classList.add("focused");
  searchInputEL.setAttribute("placeholder", "통합검색");
});

searchInputEL.addEventListener("focusout", function () {
  searchInputEL.value = "";
});

searchInputEL.addEventListener("blur", function () {
  searchEL.classList.remove("focused");
  searchInputEL.setAttribute("placeholder", "");
});

const navList = document.querySelectorAll(".nav-action");

navList.forEach((nav, idx) => {
  const area = document.querySelector(`.area-${idx + 1}`);
  const action = document.querySelector(`.action-${idx + 1}`);

  nav.addEventListener("mouseover", (e) => {
    action.style.color = "black";
    action.style.fontWeight = "bold";

    area.style.display = "block";
  });
  nav.addEventListener("mouseout", (e) => {
    action.style.color = "white";
    action.style.fontWeight = "normal";

    area.style.display = "none";
  });

  area.addEventListener("mouseover", (e) => {
    action.style.fontWeight = "bold";
    action.style.color = "black";

    area.style.display = "block";
  });
  area.addEventListener("mouseout", (e) => {
    action.style.color = "white";
    action.style.fontWeight = "normal";

    area.style.display = "none";
  });
});

const clickList = document.querySelectorAll(".nav-click");

clickList.forEach((text) => {
  text.addEventListener("click", (e) => {
    const city = text.getAttribute("value");

    const carousel = document.querySelector(".carousel");
    const allCard = document.querySelectorAll(".carousel .carousel-card");

    const overlay = document.querySelector("#overlay");

    allCard.forEach((card) => {
      card.setAttribute("data-city", city);
    });
    carousel.style.display = "block";
    overlay.style.display = "block";
  });
});

const allCard = document.querySelector(".carousel");
const overlay = document.querySelector("#overlay");
// const card = document.querySelector("card-input");
overlay.addEventListener("click", (event) => {
  //카드 닫기 버튼
  allCard.style.display = "none";
  overlay.style.display = "none";
});
