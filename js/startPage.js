const body = document.querySelector("body");
const startPage = document.querySelector(".start-page"); //기차 애니메이션 div
const festivalMap = document.querySelector(".festival-map"); //페스티벌 지도 메인 페이지
const participationBtn = document.querySelector(".participation-btn"); //축제 참여 버튼
const audio = document.querySelector(".audio"); //기차 달리는 bgm
const outside = document.querySelector(".start-page-background"); //기차 밖 픙경 div
const outsideView = document.querySelector(".outside-view"); //기차 밖 픙경 ul
const outsideImg = document.querySelector(".outside-img"); //기차 밖 픙경 li
let num = 0;

window.onload = function () {
  //새로고침 시 스크롤 맨 위로
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

participationBtn.addEventListener("click", () => {
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
      //setInterval 정해진 시간동안 특정한 함수 호출
      const currentLeft = parseInt(
        //ul이 왼쪽으로 이동하도록
        getComputedStyle(outsideView).getPropertyValue("left")
      );

      const nextPosition = currentLeft - 1920; //현재 위치에서 -1920px만큼 왼쪽으로 이동
      outsideView.style.left = `${nextPosition}px`;
      num++;

      if (num >= 2) {
        //num이 2 이하일 경우
        clearInterval(slideInterval); //함수 즉시 종료
      }
    }, 1200); //1.2초 간격으로 반복
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function (event) {
  body.classList.remove("stop-scrolling");
});
