import { festivalDataList } from "./festivaList.js";

document.querySelector("#searchInput").addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchEvt();
  }
});

function searchEvt() {
  const searchText = document.getElementById("searchInput");
  const mapElement = document.getElementsByClassName("map");
  mapElement[0].style.display = "none";

  const searchContainer = document.createElement("div");
  searchContainer.className = "searchContainer";
  const searchBoard = document.createElement("div");
  searchBoard.className = "searchBoard";

  const searchList = document.createElement("ul");
  searchList.className = "searchList";
  searchList.id = "list";
  searchList.innerHTML = "Festivals";

  searchContainer.appendChild(searchBoard);
  document.body.insertBefore(searchContainer, mapElement[0]);
  for (var i = 0; i < festivalDataList.Busan.length; i++) {
    for (let a in festivalDataList.Busan[i]) {
      if (festivalDataList.Busan[0][a].includes(searchText.value)) {
        const searchIn = document.createElement("li");
        searchIn.id = "in";
        searchIn.innerHTML = festivalDataList.Busan[i].festivalTitle;
        searchList.appendChild(searchIn);
        break;
      }
    }
    searchBoard.appendChild(searchList);
  }
}
