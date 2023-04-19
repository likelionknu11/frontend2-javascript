function searchEvt() {
  var link = "search.html";
  const searchText = document.getElementById("searchInput");
  alert(searchText.value + "해당 키워드가 포함된 내용 띄우기");
  location.href = link;
}
