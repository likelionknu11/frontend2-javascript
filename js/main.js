console.log("import");
const navList = document.querySelectorAll(".nav-action");

navList.forEach((nav, idx) => {
  const area = document.querySelector(`.area-${idx + 1}`);
  nav.addEventListener("mouseover", (e) => {
    area.style.visibility = "visible";
  });
  nav.addEventListener("mouseout", (e) => {
    area.style.visibility = "hidden";
  });

  area.addEventListener("mouseover", (e) => {
    area.style.visibility = "visible";
  });
  area.addEventListener("mouseout", (e) => {
    area.style.visibility = "hidden";
  });
});
