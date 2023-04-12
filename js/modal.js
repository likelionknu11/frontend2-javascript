/* <div class="card">
<!--카드1-->
<div class="card-title">
  <h2>궁중문화축전</h2>
  <span>X</span>
</div>
<div class="festival-contents">
  <img src="./img/축제사진/Blossom.png" alt="축제 사진" />
  <div class="card-contents">
    <!--카드 내용-->
    <p>축제명</p>
    <p>장소 : 경복궁, 창덕궁, 창경궁, 덕수궁, 경희궁, 종묘, 사직단</p>
    <p>23.04.29. (토) ~ 23.05.07. (일)</p>
    <p>축제 내용</p>
    <p class="hashtag">해시태그</p>
    <a>바로가기</a>
  </div>
</div>
</div> */

// const closeBtn = modal.querySelector(".close-modal-btn"); //모달 창 닫기 버튼
// closeBtn.addEventListener("click", (e) => {
//   modal.style.display = "none"; //닫기 버튼 클릭 시 화면에서 안보이게 된다
//   overlay.style.display = "none";
// });

// cardImg.addEventListener("hover", (e) => { //카드 이미지에 마우스 hover 시
//   cardContents.display = "block";
// })

import { festivalDataList } from "./festivaList.js";

class cardInput extends HTMLElement {
  //사용자 정의 함수
  //사용자 정의 함수의 장점 = 소스 재활용에 용이, 효율적인 코딩 가능 등등
  connectedCallback() {
    const festivalData = festivalDataList[0];
    //만든 태그가 HTML에 장착될 때 실행할 코드를 적는 곳
    //super(); //항상 super를 생성자에서 먼저 호출
    const cardTitle = document.createElement("div"); //카드 내용 태그
    cardTitle.classList.add("card-title");
    this.appendChild(cardTitle);

    const festivalTitle = document.createElement("h2"); //축제 이름
    festivalTitle.innerHTML = festivalData.festivalTitle; //축제 이름 설정
    cardTitle.appendChild(festivalTitle);

    const cardClose = document.createElement("span"); //축제 이름
    cardClose.innerHTML = "X";
    cardTitle.appendChild(cardClose);

    const festivalContents = document.createElement("div"); //축제 이름
    festivalContents.classList.add("festival-contents");
    this.appendChild(festivalContents);

    const festivalImg = document.createElement("img"); //축제 메인 이미지
    festivalImg.setAttribute("src", "./img/축제사진/Blossom.png"); //각각의 이미지
    festivalImg.setAttribute("alt", "축제사진");
    festivalContents.appendChild(festivalImg);

    const cardContents = document.createElement("div");
    cardContents.classList.add("card-contents");
    festivalContents.appendChild(cardContents);

    for (let i = 0; i <= 5; i++) {
      const contentsText = document.createElement("p");
      contentsText.innerHTML = "예시";
      cardContents.appendChild(contentsText);
    }
  }
}

customElements.define("card-input", cardInput);
