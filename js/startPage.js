let outsideView = document.querySelector(".outside-view");

$(document).ready(function () {
  let num = 0;

  setInterval(function () {
    if (num < 2) {
      num++;

      outsideView.animate(
        {
          left: "-=1200",
        },
        "slow"
      );
    } else {
      num = 0;

      outsideView.animate(
        {
          left: 0,
        },
        "slow"
      );
    }
  }, 3000);
});
//이미지슬라이드 좌 우
