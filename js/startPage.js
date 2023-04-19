// let outside = document.querySelector(".start-page-background"); /*div */
// let outsideView = document.querySelector(".outside-view"); /*ul */
// let num = 0;

// document.addEventListener("DOMContentLoaded", function () {
//   setInterval(function () {
//     if (num < 2) {
//       outsideView.animate(
//         {
//           left: "-=1200",
//         },
//         1000 /* duration in milliseconds */
//       );
//       num++;
//     } else {
//       num = 0;

//       outsideView.animate(
//         {
//           left: 0,
//         },
//         1000 /* duration in milliseconds */
//       );
//     }
//   }, 3000);
// });

const participationBtn = document.querySelector(".participation-btn"); //축제 참여 버튼튼
const audio = document.querySelector(".audio"); //기차 달리는 bgm

participationBtn.addEventListener("click", () => {
  participationBtn.style.opacity = 0; // 페이드아웃 되도록 opacity 값 변경
  audio.play(); //기차 bgm 재생
});
