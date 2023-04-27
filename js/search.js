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
        const festivalText = document.createElement("h1");

        festivalText.innerHTML =
          festivalDataList.Busan[i].festivalTitle +
          "<br>" +
          festivalDataList.Busan[i].festivalAreaIns +
          "<br>" +
          festivalDataList.Busan[i].festivalDate +
          "<br>" +
          festivalDataList.Busan[i].festivalMainIns +
          "<br>" +
          festivalDataList.Busan[i].festivalTag +
          "<br>" +
          festivalDataList.Busan[i].festivalSite;

        searchList.appendChild(searchIn);
        searchIn.addEventListener(
          "click",
          function () {
            searchList.style.display = "none";
            var newDiv = document.createElement("div");
            // div의 내용을 채웁니다.
            // div의 스타일을 지정합니다.
            const divClose = document.createElement("span"); //카드 닫기 버튼
            divClose.innerHTML = "X";
            divClose.addEventListener("click", function () {
              newDiv.style.display = "none";
              searchList.style.display = "";
            });
            newDiv.style.borderRadius = "30px";
            newDiv.style.border = "3px solid white";
            newDiv.style.padding = "10px";
            newDiv.style.margin = "20px";
            // body 요소에 새로운 div를 추가합니다.
            searchBoard.appendChild(newDiv);
            newDiv.appendChild(divClose);
            newDiv.appendChild(festivalText);
          },
          false
        );

        break;
      }
    }
    searchBoard.appendChild(searchList);
  }

  for (var i = 0; i < festivalDataList.Seoul.length; i++) {
    for (let a in festivalDataList.Seoul[i]) {
      if (festivalDataList.Seoul[0][a].includes(searchText.value)) {
        const searchIn = document.createElement("li");
        searchIn.id = "in";
        searchIn.innerHTML = festivalDataList.Seoul[i].festivalTitle;
        const festivalText = document.createElement("h1");

        festivalText.innerHTML =
          festivalDataList.Seoul[i].festivalTitle +
          "<br>" +
          festivalDataList.Seoul[i].festivalAreaIns +
          "<br>" +
          festivalDataList.Seoul[i].festivalDate +
          "<br>" +
          festivalDataList.Seoul[i].festivalMainIns +
          "<br>" +
          festivalDataList.Seoul[i].festivalTag +
          "<br>" +
          festivalDataList.Seoul[i].festivalSite;

        searchList.appendChild(searchIn);
        searchIn.addEventListener(
          "click",
          function () {
            searchList.style.display = "none";
            var newDiv = document.createElement("div");
            // div의 내용을 채웁니다.
            // div의 스타일을 지정합니다.
            const divClose = document.createElement("span"); //카드 닫기 버튼
            divClose.innerHTML = "X";
            divClose.addEventListener("click", function () {
              newDiv.style.display = "none";
              searchList.style.display = "";
            });
            newDiv.style.borderRadius = "30px";
            newDiv.style.border = "3px solid white";
            newDiv.style.padding = "10px";
            newDiv.style.margin = "20px";
            // body 요소에 새로운 div를 추가합니다.
            searchBoard.appendChild(newDiv);
            newDiv.appendChild(divClose);
            newDiv.appendChild(festivalText);
          },
          false
        );

        break;
      }
    }
    searchBoard.appendChild(searchList);
  }

  for (var i = 0; i < festivalDataList.Daegu.length; i++) {
    for (let a in festivalDataList.Daegu[i]) {
      if (festivalDataList.Daegu[0][a].includes(searchText.value)) {
        const searchIn = document.createElement("li");
        searchIn.id = "in";
        searchIn.innerHTML = festivalDataList.Daegu[i].festivalTitle;
        const festivalText = document.createElement("h1");

        festivalText.innerHTML =
          festivalDataList.Daegu[i].festivalTitle +
          "<br>" +
          festivalDataList.Daegu[i].festivalAreaIns +
          "<br>" +
          festivalDataList.Daegu[i].festivalDate +
          "<br>" +
          festivalDataList.Daegu[i].festivalMainIns +
          "<br>" +
          festivalDataList.Daegu[i].festivalTag +
          "<br>" +
          festivalDataList.Daegu[i].festivalSite;

        searchList.appendChild(searchIn);
        searchIn.addEventListener(
          "click",
          function () {
            searchList.style.display = "none";
            var newDiv = document.createElement("div");
            // div의 내용을 채웁니다.
            // div의 스타일을 지정합니다.
            const divClose = document.createElement("span"); //카드 닫기 버튼
            divClose.innerHTML = "X";
            divClose.addEventListener("click", function () {
              newDiv.style.display = "none";
              searchList.style.display = "";
            });
            newDiv.style.borderRadius = "30px";
            newDiv.style.border = "3px solid white";
            newDiv.style.padding = "10px";
            newDiv.style.margin = "20px";
            // body 요소에 새로운 div를 추가합니다.
            searchBoard.appendChild(newDiv);
            newDiv.appendChild(divClose);
            newDiv.appendChild(festivalText);
          },
          false
        );

        break;
      }
    }
    searchBoard.appendChild(searchList);
  }
  for (var i = 0; i < festivalDataList.Incheon.length; i++) {
    for (let a in festivalDataList.Incheon[i]) {
      if (festivalDataList.Incheon[0][a].includes(searchText.value)) {
        const searchIn = document.createElement("li");
        searchIn.id = "in";
        searchIn.innerHTML = festivalDataList.Incheon[i].festivalTitle;
        const festivalText = document.createElement("h1");

        festivalText.innerHTML =
          festivalDataList.Incheon[i].festivalTitle +
          "<br>" +
          festivalDataList.Incheon[i].festivalAreaIns +
          "<br>" +
          festivalDataList.Incheon[i].festivalDate +
          "<br>" +
          festivalDataList.Incheon[i].festivalMainIns +
          "<br>" +
          festivalDataList.Incheon[i].festivalTag +
          "<br>" +
          festivalDataList.Incheon[i].festivalSite;

        searchList.appendChild(searchIn);
        searchIn.addEventListener(
          "click",
          function () {
            searchList.style.display = "none";
            var newDiv = document.createElement("div");
            // div의 내용을 채웁니다.
            // div의 스타일을 지정합니다.
            const divClose = document.createElement("span"); //카드 닫기 버튼
            divClose.innerHTML = "X";
            divClose.addEventListener("click", function () {
              newDiv.style.display = "none";
              searchList.style.display = "";
            });
            newDiv.style.borderRadius = "30px";
            newDiv.style.border = "3px solid white";
            newDiv.style.padding = "10px";
            newDiv.style.margin = "20px";
            // body 요소에 새로운 div를 추가합니다.
            searchBoard.appendChild(newDiv);
            newDiv.appendChild(divClose);
            newDiv.appendChild(festivalText);
          },
          false
        );

        break;
      }
    }
    searchBoard.appendChild(searchList);
  }
}
