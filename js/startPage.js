const body = document.querySelector("body");
const startPage = document.querySelector(".start-page"); //기차 애니메이션 div
const festivalMap = document.querySelector(".festival-map"); //페스티벌 지도 메인 페이지
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

participationBtn.addEventListener("click", () => {
  participationBtn.style.opacity = 0; // 페이드아웃 되도록 opacity 값 변경
  audio.play(); //기차 bgm 재생
  setTimeout(() => {
    startPage.style.transition = "opacity 1s ease-in-out";
    startPage.style.opacity = 0; // startPage를 fadeOut
    setTimeout(() => {
      startPage.style.display = "none"; // startPage를 삭제
    }, 1000);
  }, 5000); // 4초 후에 전체 애니메이션 사라지도록

  setTimeout(() => {
    let num = 0;
    let slideInterval = setInterval(() => {
      //기차 밖 풍경 이미지슬라이드
      if (num < 2) {
        // 이미지의 개수가 3개 미만일 경우
        outsideView.style.transform = `translateX(-${(num + 1) * 1920}px)`;
        num++;
      } //1.2초마다 1장의 이미지가 왼쪽으로 이동하도록
    }, 1200);

    setTimeout(() => {
      clearInterval(slideInterval); // 3초 후에 이미지 슬라이드 정지
    }, 3000);
  }, 1000); // 버튼 클릭 후 1초 후에 실행
});

document.addEventListener("DOMContentLoaded", function (event) {
  body.classList.remove("stop-scrolling");
});
