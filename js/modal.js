const closeBtn = modal.querySelector(".close-modal-btn"); //모달 창 닫기 버튼
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"; //닫기 버튼 클릭 시 화면에서 안보이게 된다
});