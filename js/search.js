import { festivalDataList } from "./festivaList.js";

document.querySelector("#searchInput").addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchEvt();
  }
});

const scrollIndicator = document.getElementById("scroll-indicator"); //상태 표시바
const scrollIndicatorImg = document.getElementById("scroll-indicator img"); //상태 표시바
const windowHeight = window.innerHeight;
const fullHeight = document.body.clientHeight;

if (scrollIndicator) {
  //상태 표시바가 나타나도록

  window.addEventListener("scroll", function () {
    scrollIndicator.style.display = "block";
    scrollIndicator.style.visibility = "visible";
    //스크롤 할 때마다 기차 아이콘 오른쪽에서 왼쪽으로 이동
    const scrolled = window.scrollY;
    const percentScrolled = scrolled / (fullHeight - windowHeight);
    const rightPosition = (1 - percentScrolled) * 95 - 20;
    scrollIndicator.style.right = `${rightPosition}px`;
  });
}

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

var container = document.getElementById("searchContainerMap"); //지도 api가져오기
var options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
};

var map = new kakao.maps.Map(container, options);

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
        const festivalLink = document.createElement("a");

        festivalLink.href = festivalDataList.Busan[i].festivalSite;
        festivalLink.textContent = festivalDataList.Busan[i].festivalSite;

        const festivalImage = document.createElement("img");
        festivalImage.setAttribute("id", "festival-img");
        festivalImage.src = "./img/축제사진/Busan/" + i + ".jpg";

        festivalText.innerHTML = festivalDataList.Busan[i].festivalTitle;
        festivalAreaIns.innerHTML = festivalDataList.Busan[i].festivalAreaIns;
        festivalDate.innerHTML = festivalDataList.Busan[i].festivalDate;
        festivalMainIns.innerHTML = festivalDataList.Busan[i].festivalMainIns;
        festivalTag.innerHTML = festivalDataList.Busan[i].festivalTag;

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

          var festivalimg = document.querySelector("#festival-img"); // 이전에 있던 건 제거
          if (festivalimg) {
            festivalimg.remove();
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

          festivalSite.appendChild(festivalLink);
        });
        break;
      }
    }
  }
}
