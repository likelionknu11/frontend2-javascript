const navList = document.querySelectorAll(".nav-action");

navList.forEach((nav, idx) => {
  const area = document.querySelector(`.area-${idx + 1}`);
  nav.addEventListener("mouseover", (e) => {
    area.style.display = "block";
  });
  nav.addEventListener("mouseout", (e) => {
    area.style.display = "none";
  });

  area.addEventListener("mouseover", (e) => {
    area.style.display = "block";
  });
  area.addEventListener("mouseout", (e) => {
    area.style.display = "none";
  });
});
