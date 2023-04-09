const $card1 = document.querySelector('.card1'); //카드1 이미지 가져오기
const $card2 = document.querySelector('.card2'); //카드2 이미지 가져오기
const $card3 = document.querySelector('.card3'); //카드3 이미지 져오기
const $cardImg= document.querySelector('.card img'); //카드3 이미지 져오기



const closeBtn = modal.querySelector(".close-modal-btn"); //모달 창 닫기 버튼
closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none"; //닫기 버튼 클릭 시 화면에서 안보이게 된다
  overlay.style.display = "none";
});

class cardInput extends HTMLElement { //사용자 정의 함수
  //사용자 정의 함수의 장점 = 소스 재활용에 용이, 효율적인 코딩 가능 등등
  connectedCallback() { //만든 태그가 HTML에 장착될 때 실행할 코드를 적는 곳
    //super(); //항상 super를 생성자에서 먼저 호출
    let cardInput = document.createElement('div'); //카드 내용 태그
    this.appendChild(cardInput);
    let festivalTitle = document.createElement('h2'); //축제 이름
    cardInput.appendChild(festivalTitle);
    let festivalImg = document.createElement('img'); //축제 메인 이미지
    cardInput.appendChild(festivalImg);
    $card1.festivalImg = [
      {
        id: "card1Img1",
        src : "./img/축제사진/Jong-ro.jpg",
      },
      {
        id: "card1Img2",
        src : "./img/축제사진/Kangnam.jpg",
      },
      {
        id: "card1Img3",
        src : "./img/축제사진/Blossom.png",
      },
    ];
    $card1.cardImgView = [1, 2, 3];

$cardImg.addEventListener("click", (e) => { //card img 클릭 시
  //$card.style.css = background: rgba(0, 0, 0, 0.35);;
});

    let cardContents = document.createElement('ul'); //카드 내용을 담을 ul
    cardInput.appendChild(cardContents);

    let festivalDate = document.createElement('li'); //카드 내용 / 축제 기간
    cardContents.appendChild(festivalDate);
    let festivalDateTitle = document.createElement('span'); //카드 내용 / 축제 기간을 작성한 타이틀
    festivalDate.appendChild(festivalDateTitle);
    let festivalDateTerm = document.createElement('a'); //카드 내용 / 축제 기간을 알려줌
    festivalDate.appendChild(festivalDateTerm);

    let festivalArea = document.createElement('li'); //카드 내용 / 축제 장소
    cardContents.appendChild(festivalArea);
    $card1.festivalArea
    let festivalAreaTitle = document.createElement('span'); //카드 내용 / 축제 장소을 작성한 타이틀
    festivalArea.appendChild(festivalAreaTitle);
    let festivalAreaIns = document.createElement('a'); //카드 내용 / 축제 장소를 알려줌
    festivalArea.appendChild(festivalAreaIns);

    let festivalIns = document.createElement('li'); //카드 내용 / 축제 설명
    cardContents.appendChild(festivalIns);
    let festivalInsTitle = document.createElement('span'); //카드 내용 / 축제 설명을 작성한 타이틀
    festivalIns.appendChild(festivalInsTitle);
    let festivalMainIns = document.createElement('span'); //카드 내용 / 축제에 관한 설명
    festivalIns.appendChild(festivalMainIns);

    let festivalTag = document.createElement('li'); //카드 내용 / 축제 해시태그
    cardContents.appendChild(festivalTag);

    let festivalSite = document.createElement('a'); //카드 내용 / 축제 관련 사이트
    cardContents.appendChild(festivalSite);
  };
};

customElements.define("card-input", cardInput);

