window.addEventListener("load", () => {
  const map = document.querySelector(".map");
  // contentDocument 속성으로 접근
  const svgDoc = map.contentDocument;

  // svgDoc(지도)에 .OUTLINE 클래스를 보유하고 있는 모든 요소를 cityList에 배열로 가져옴.
  const cityList = svgDoc.querySelectorAll(".OUTLINE");

  // 배열을 forEach문을 통해 각각의 요소(city)로 분해 후 각각의 요소에 click EventLintener을 장착
  cityList.forEach((city) => {
    city.addEventListener("click", (e) => {
      const cityDiv = document.createElement("div");
      cityDiv.textContent = "안녕하세요?" + city.id + "입니다.";
      cityDiv.className = "cityDiv";

      const cityClose = document.createElement("button");
      cityClose.textContent = "X";
      cityClose.className = "closeCity";

      cityDiv.appendChild(cityClose);
      document.body.appendChild(cityDiv);
      const cloCity = document.querySelector(".closeCity");
      cloCity.addEventListener("click", (e) => {
        document.body.removeChild(cityDiv);
      });
    });

    city.addEventListener("mouseover", () => {
      const hoverCity = svgDoc.querySelector(`#${city.id}`);
      const poly = svgDoc.querySelector(".polyG");

      poly.appendChild(hoverCity);
    });
  });
});
