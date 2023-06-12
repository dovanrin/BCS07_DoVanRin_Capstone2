// Tăng giảm số lương
var data = 0;
function tang() {
  data = data + 1;
  document.getElementById("hienThiSoLuong").innerHTML = data;
}
function giam() {
  if (data > 0) {
    data = data - 1;
  }
  document.getElementById("hienThiSoLuong").innerHTML = data;
}
$(document).ready(function () {
  $(".bar").click(function () {
    $("#navbar-content").slideToggle();
  });
});
