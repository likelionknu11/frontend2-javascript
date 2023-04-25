<<<<<<< HEAD
// const body = document.querySelector("body");
// const startPage = document.querySelector(".start-page"); //기차 애니메이션 div
// const festivalMap = document.querySelector(".festival-map"); //페스티벌 지도 메인 페이지
// const participationBtn = document.querySelector(".participation-btn"); //축제 참여 버튼
// const audio = document.querySelector(".audio"); //기차 달리는 bgm
// const outside = document.querySelector(".start-page-background"); //기차 밖 픙경 div
// const outsideView = document.querySelector(".outside-view"); //기차 밖 픙경 ul
// const outsideImg = document.querySelector(".outside-img"); //기차 밖 픙경 li
// let num = 0;

// // 1번째 사진이 먼저 보이도록 초기값 설정
// outsideView.style.left = "-1920px";

// window.onload = function () {
//   //새로고침 시 스크롤 맨 위로
//   setTimeout(function () {
//     scrollTo(0, 0);
//   }, 100);
// };
=======
const body = document.querySelector("body");
const startPage = document.querySelector(".start-page"); //기차 애니메이션 div
const participationBtn = document.querySelector(".participation-btn"); //축제 참여 버튼
const audio = document.querySelector(".audio"); //기차 달리는 bgm
const outside = document.querySelector(".start-page-background"); //기차 밖 픙경 div
const outsideView = document.querySelector(".outside-view"); //기차 밖 픙경 ul
let num = 0;

window.onload = function () {
  //새로고침 시 스크롤 맨 위로
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};
>>>>>>> 4d1a1750f841224dc0e2ae4f3707ea1f0e8bcc77

// function changeTrainImage() {
//   //기차 이미지가 랜덤으로 뜨도록
//   const IMG_COUNT = 3;
//   const trainImg = document.querySelector(".train img");
//   const randomIndex = Math.floor(Math.random() * IMG_COUNT) + 1;
//   trainImg.src = `./img/start-page/기차배경${randomIndex}.png`;
// }

// function changeOutsideImages() {
//   //기차 풍경 이미지가 랜덤으로 뜨도록
//   const IMG_COUNT = 12;
//   const imgSrcs = Array.from(
//     { length: IMG_COUNT },
//     (_, i) => `./img/start-page/outside${i + 1}.png`
//   );
//   const outsideImgs = document.querySelectorAll(".outside-img img");
//   const usedIndexes = []; // 이전에 선택된 인덱스를 추적하는 배열 / 이미지 중복 방지

//   outsideImgs.forEach((img) => {
//     //기차 풍경 이미지가 중복으로 뜨지 않도록
//     let randomIndex = Math.floor(Math.random() * IMG_COUNT);
//     while (usedIndexes.includes(randomIndex)) {
//       // 중복 검사를 위한 반복문
//       randomIndex = Math.floor(Math.random() * IMG_COUNT);
//     }
//     usedIndexes.push(randomIndex); // 선택된 인덱스를 usedIndexes 배열에 추가
//     img.src = imgSrcs[randomIndex];
//   });
// }

// changeTrainImage(); //기차 이미지가 랜덤으로 뜨도록하는 함수 호출
// changeOutsideImages(); // 기차 밖 풍경이 랜덤으로 나타나도록 하는 함수 호출

<<<<<<< HEAD
// participationBtn.addEventListener("click", () => {
//   // 축제 참여 버튼 클릭 시
//   participationBtn.style.opacity = 0; // 페이드아웃 되도록 opacity 값 변경
//   audio.play(); //기차 bgm 재생
//   setTimeout(() => {
//     startPage.style.transition = "opacity 1s ease-in-out";
//     startPage.style.opacity = 0; // startPage를 fadeOut
//     setTimeout(() => {
//       startPage.style.display = "none"; // startPage를 삭제
//     }, 1000);
//   }, 5000); // 5초 후에 전체 애니메이션 사라지도록

//   setTimeout(() => {
//     const slideInterval = setInterval(() => {
//       //setInterval 정해진 시간동안 특정한 함수 호출
//       const currentLeft = parseInt(
//         //ul이 왼쪽으로 이동하도록
//         getComputedStyle(outsideView).getPropertyValue("left")
//       );

//       const nextPosition = currentLeft - 1920; //현재 위치에서 -1920px만큼 왼쪽으로 이동
//       outsideView.style.left = `${nextPosition}px`;
//       num++;

//       if (num >= 2) {
//         //num이 2 이하일 경우
//         clearInterval(slideInterval); //함수 즉시 종료
//       }
//     }, 1200); //1.2초 간격으로 반복
//   }, 1000);
=======
participationBtn.addEventListener("click", () => {
  // 축제 참여 버튼 클릭 시
  participationBtn.style.opacity = 0; // 페이드아웃 되도록 opacity 값 변경
  audio.play(); //기차 bgm 재생

  setTimeout(() => {
    startPage.style.transition = "opacity 1s ease-in-out";
    startPage.style.opacity = 0; // startPage를 fadeOut
    setTimeout(() => {
      startPage.style.display = "none"; // startPage를 삭제
    }, 1000);
  }, 5000); // 5초 후에 전체 애니메이션 사라지도록

  setTimeout(() => {
    const slideInterval = setInterval(() => {
      const currentLeft = parseInt(
        getComputedStyle(outsideView).getPropertyValue("left")
      );

      const nextPosition = currentLeft - 960; // 이미지 하나씩 이동하도록 변경
      outsideView.style.left = `${nextPosition}px`;
      num++;

      if (num >= 2) {
        //num이 2 이하일 경우
        clearInterval(slideInterval); //함수 즉시 종료
      }
    }, 1400); //1.4초 간격으로 반복
  }, 400);
>>>>>>> 4d1a1750f841224dc0e2ae4f3707ea1f0e8bcc77

//   setTimeout(() => {
//     body.classList.remove("stop-scrolling");
//   }, 6000); //전체 애니메이션이 끝나고 6초 후에 stop-scrolling 클래스 제거
// });
