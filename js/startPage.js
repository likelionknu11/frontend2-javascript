const startPage = document.querySelector(".start-page"); //기차 애니메이션 div
const participationBtn = document.querySelector(".participation-btn"); //축제 참여 버튼
const audio = document.querySelector(".audio"); //기차 달리는 bgm
const outside = document.querySelector(".start-page-background"); //기차 밖 픙경 div
const outsideView = document.querySelector(".outside-view"); //기차 밖 픙경 ul
let num = 0;

participationBtn.addEventListener("click", () => {
  participationBtn.style.opacity = 0; // 페이드아웃 되도록 opacity 값 변경
  audio.play(); //기차 bgm 재생
  setTimeout(() => {
    startPage.style.transition = "opacity 1s ease-in-out";
    startPage.style.opacity = 0; // startPage를 fadeOut
    setTimeout(() => {
      startPage.style.display = "none"; // startPage를 삭제
    }, 1000);
  }, 4000); // 4초 후에 실행
  setInterval(() => {
    //기차 밖 풍경 이미지슬라이드
    if (num < 2) {
      outsideView.animate(
        {
          left: "-=1200",
        },
        1000 /* duration in milliseconds */
      );
      num++;
    } else {
      num = 0;

      outsideView.animate(
        {
          left: 0,
        },
        1000 /* duration in milliseconds */
      );
    }
  }, 3000);
});
