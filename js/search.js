import { festivalDataList } from "./festivaList.js";

console.log(festivalDataList);

document.querySelector("#searchInput").addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchEvt();
  }
});

function searchEvt() {
  const searchText = document.getElementById("searchInput");
  alert(searchText.value + "해당 키워드가 포함된 내용띄우기");
  const mapElement = document.getElementsByClassName("map");
  mapElement[0].style.display = "none";

  const searchContainer = document.createElement("div");
  searchContainer.className = "searchContainer";
  const searchBoard = document.createElement("div");
  searchBoard.className = "searchBoard";

  const searchList = document.createElement("ul");
  searchList.className = "searchList";
  const searchIn = document.createElement("li");
  const searchIn2 = document.createElement("li");

  searchIn.id = "in";
  searchIn2.id = "in";
  searchList.id = "list";

  searchList.innerHTML = "Festivals";
  searchIn.innerHTML = "서울 축제";
  searchIn2.innerHTML = "부산 축제";

  searchBoard.appendChild(searchList);
  searchList.appendChild(searchIn);
  searchList.appendChild(searchIn2);

  searchContainer.appendChild(searchBoard);
  document.body.insertBefore(searchContainer, mapElement[0]);
}
