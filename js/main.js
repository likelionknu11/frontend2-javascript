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

const clickText = (e) => {};
