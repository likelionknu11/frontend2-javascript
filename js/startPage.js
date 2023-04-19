let outsideView = document.querySelector(".outside-view");
let num = 0;

$(document).ready(function () {
  setInterval(function () {
    if (num < 2) {
      outsideView.animate(
        {
          left: "-=1200",
        },
        "slow"
      );
      num++;
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
