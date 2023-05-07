import { festivalDataList } from "./festivaList.js";

document.querySelector("#searchInput").addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchEvt();
  }
});

const scrollIndicator = document.getElementById("scroll-indicator");
const windowHeight = window.innerHeight;
const fullHeight = document.body.clientHeight;

window.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  const percentScrolled = scrolled / (fullHeight - windowHeight);
  const rightPosition = (1 - percentScrolled) * 50 - 50;
  scrollIndicator.style.right = `${rightPosition}px`;
});

function elementVisible(elementID) {
  var visibleElement = document.getElementById(elementID);
  visibleElement.style.transition = "1s";
  visibleElement.style.visibility = "visible";
  visibleElement.style.opacity = 1;
}

function elementHidden(elementID) {
  var hiddenElement = document.getElementById(elementID);
  hiddenElement.style.transition = "0s";
  hiddenElement.style.visibility = "Hidden";
  hiddenElement.style.opacity = 0;
}

const searchContainer = document.querySelector(".searchContainer"); //축제 상세 창
const searchSpanCloseBtn = document.querySelector("#searchSpanCloseBtn"); //축제 상세 창 닫기 버튼

searchSpanCloseBtn.addEventListener("click", (event) => {
  //상세 창 닫기 버튼 클릭 시 축제 리스트로 이동
  elementHidden("searchContainer");
  var elements = document.querySelectorAll("h1");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.transition = "1s";
    elements[i].style.visibility = "visible";
  }
});

function searchEvt() {
  var searchContainer = document.getElementById("searchContainer");
  if (searchContainer.style.visibility === "visible") {
    elementHidden("searchContainer");
  }
  var elements = document.querySelectorAll("h1"); // 검색전에 이전에 있던 모든 h1 제거.
  for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }

  elementHidden("map");
  elementVisible("searchBox");

  var searchContainer = document.getElementById("searchContainer"); // 검색 내용에 해당되는 요소를 담을 searchContainer
  var searchInput = document.getElementById("searchInput"); // 검색 내용을 찾을 searchInput

  for (var i = 0; i < festivalDataList.Busan.length; i++) {
    // 검색 내용이 해당되는 festivalList 있는 지 찾기 위한 반복문
    for (let a in festivalDataList.Busan[i]) {
      if (festivalDataList.Busan[i][a].includes(searchInput.value)) {
        // 검색 내용이 포함되었다면 searchBox에 해당 축제들의 타이틀들을 추가
        const festivalText = document.createElement("h1");
        const festivalAreaIns = document.createElement("h3");
        const festivalDate = document.createElement("h3");
        const festivalMainIns = document.createElement("h3");
        const festivalTag = document.createElement("h3");
        const festivalSite = document.createElement("h3");
        const festivalImage = document.createElement("img");
        festivalImage.src = "./img/축제사진/Busan/" + i + ".jpg";

        festivalText.innerHTML = festivalDataList.Busan[i].festivalTitle;
        festivalAreaIns.innerHTML = festivalDataList.Busan[i].festivalAreaIns;
        festivalDate.innerHTML = festivalDataList.Busan[i].festivalDate;
        festivalMainIns.innerHTML = festivalDataList.Busan[i].festivalMainIns;
        festivalTag.innerHTML = festivalDataList.Busan[i].festivalTag;
        festivalSite.innerHTML = festivalDataList.Busan[i].festivalSite;

        searchBox.appendChild(festivalText);
        festivalText.addEventListener("click", function () {
          // Ÿ��Ʋ�� �˻��ϸ� ������ �ִ� searchContainer�� ���̰� �ǰ� ��� Ÿ��Ʋ���� ������
          elementVisible("searchContainer");
          var elements = document.querySelectorAll("h1");
          for (var i = 0; i < elements.length; i++) {
            elements[i].style.transition = "0s";
            elements[i].style.visibility = "hidden";
          }
          var elements3 = document.querySelectorAll("h3"); // 이전에 있던 모든 h3 제거.
          for (var i = 0; i < elements3.length; i++) {
            elements3[i].remove();
          }
          var clickTitle = document.querySelectorAll("h2"); // 이전에 있던 건 제거
          clickTitle[0].remove();

          var festivalimg = document.querySelectorAll("img"); // 이전에 있던 건 제거
          for (var i = 0; i < festivalimg.length; i++) {
            festivalimg[i].remove();
          }

          const festivalText2 = document.createElement("h2"); // Ŭ���� Ÿ��Ʋ�� searchContainer�� �߰��ϱ�
          festivalText2.innerHTML = festivalText.innerHTML;
          searchContainer.appendChild(festivalText2);
          searchContainer.appendChild(festivalAreaIns);
          searchContainer.appendChild(festivalDate);
          searchContainer.appendChild(festivalMainIns);
          searchContainer.appendChild(festivalTag);
          searchContainer.appendChild(festivalSite);
          searchContainer.appendChild(festivalImage);
        });
        break;
      }
    }
  }
}
