import { festivalDataList } from "./festivaList.js";

document.querySelector("#searchInput").addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchEvt();
  }
});

function searchEvt() {
  var elements = document.querySelectorAll("h1"); // 검색전에 이전에 있던 모든 h1 제거.
  for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }

  var map = document.getElementsByClassName("map"); // 검색시 map은 안 보이고 숨겨져 있던 seacrhBox는 보이게 함.
  map[0].style.visibility = "hidden";
  map[0].style.opacity = 0;
  var searchBox = document.getElementById("searchBox");
  searchBox.style.visibility = "visible";
  searchBox.style.opacity = 1;

  var searchContainer = document.getElementById("searchContainer");
  var searchInput = document.getElementById("searchInput");

  for (var i = 0; i < festivalDataList.Busan.length; i++) {
    for (let a in festivalDataList.Busan[i]) {
      if (festivalDataList.Busan[i][a].includes(searchInput.value)) {
        const festivalText = document.createElement("h1");

        festivalText.innerHTML = festivalDataList.Busan[i].festivalTitle;
        searchBox.appendChild(festivalText);
        festivalText.addEventListener("click", function () {
          searchContainer.style.visibility = "visible";
          searchContainer.style.opacity = 1;
          var elements = document.querySelectorAll("h1");
          for (var i = 0; i < elements.length; i++) {
            elements[i].style.transition = "0s";
            elements[i].style.visibility = "hidden";
          }
          const festivalText2 = document.createElement("h2");
          festivalText2.innerHTML = festivalText.innerHTML;
          searchContainer.appendChild(festivalText2);
        });
        break;
      }
    }
  }
}
