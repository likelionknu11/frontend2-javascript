import { festivalDataList } from "./festivaList.js";

// const searchContainer = document.querySelector(".searchContainer"); //축제 상세 페이지
// const searchSpanCloseBtn = document.querySelector("#searchSpanCloseBtn"); //축제 상세 페이지 닫기 버튼

document.querySelector("#searchInput").addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchEvt();
  }
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

const searchContainer = document.querySelector(".searchContainer"); //���� �� â
const searchSpan = document.querySelector("#searchSpan"); //���� �� â �ݱ� ��ư

searchSpan.addEventListener("click", (event) => {
  //�� â �ݱ� ��ư Ŭ�� �� ���� ����Ʈ�� �̵�
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
  var elements = document.querySelectorAll("h1"); // �˻����� ������ �ִ� ��� h1 ����.
  for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
  elementHidden("map");
  elementVisible("searchBox");

  var searchContainer = document.getElementById("searchContainer"); // �˻� ���뿡 �ش�Ǵ� ��Ҹ� ���� searchContainer
  var searchInput = document.getElementById("searchInput"); // �˻� ������ ã�� searchInput

  for (var i = 0; i < festivalDataList.Busan.length; i++) {
    // �˻� ������ �ش�Ǵ� festivalList �ִ� �� ã�� ���� �ݺ���
    for (let a in festivalDataList.Busan[i]) {
      if (festivalDataList.Busan[i][a].includes(searchInput.value)) {
        // �˻� ������ ���ԵǾ��ٸ� searchBox�� �ش� �������� Ÿ��Ʋ���� �߰�
        const festivalText = document.createElement("h1");

        festivalText.innerHTML = festivalDataList.Busan[i].festivalTitle;
        searchBox.appendChild(festivalText);
        festivalText.addEventListener("click", function () {
          // Ÿ��Ʋ�� �˻��ϸ� ������ �ִ� searchContainer�� ���̰� �ǰ� ��� Ÿ��Ʋ���� ������
          elementVisible("searchContainer");
          var elements = document.querySelectorAll("h1");
          for (var i = 0; i < elements.length; i++) {
            elements[i].style.transition = "0s";
            elements[i].style.visibility = "hidden";
          }
          var clickTitle = document.querySelectorAll("h2"); // ������ �ִ� �� ����
          clickTitle[0].remove();
          const festivalText2 = document.createElement("h2"); // Ŭ���� Ÿ��Ʋ�� searchContainer�� �߰��ϱ�
          festivalText2.innerHTML = festivalText.innerHTML;
          searchContainer.appendChild(festivalText2);
        });
        break;
      }
    }
  }
}
