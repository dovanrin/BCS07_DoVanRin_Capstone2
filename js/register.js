function setRegister() {
  var formDangKy = new Register();
  formDangKy.ten = document.getElementById("ten").value;

  formDangKy.password = document.getElementById("password").value;
  formDangKy.confirmPass = document.getElementById("confirmPass").value;
  formDangKy.phone = document.getElementById("phone").value;
  formDangKy.email = document.getElementById("email").value;
  formDangKy.gioiTinh = document.querySelector(
    'input[name="Gender"]:checked'
  ).value;
  // console.log(formDangKy);

  var dangKy = layGiaTriInput();
  if (dangKy) {
    var promise = axios({
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      method: "POST",
      ResponseType: JSON,
      data: formDangKy,
    });
    promise.then(function (res) {
      alert("Chúc mừng bạn đã đăng ký thành công");
      ganGiaTriChoInput("", "", "", "", "");
    });

    // là xog hết r ak, duđuúngùi
    // cái catch không hoạt động a -- sửa cái link api lại nó mới chạy vô catch
    // e nhap lai vo di

    promise.catch(function (orr) {
      alert("Đăng ký thất bại. Vui lòng nhập lại");
    });
  }
}

// if (validation() != null) {
//   setRegister();
// }
function layGiaTriInput() {
  // lấy giữ liệu người dùng
  var ten = document.getElementById("ten").value;
  var pass = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var gioiTinh = document.getElementById("gioiTinh").value;

  var valid = true;
  valid =
    kiemTraRong(ten, "tbten") &
    kiemTraRong(pass, "tbmk") &
    kiemTraRong(confirmPass, "tbNhapLai") &
    kiemTraRong(email, "tbemail") &
    kiemTraRong(phone, "tbphone");
  // kiemTraRong(gioiTinh, "tbGioiTinh");

  valid &= kiemTraEmail(email, "tbemail");
  valid &= kiemTraDoDai(phone, 10, "tbphone");
  valid &= kiemTraDinhDang(ten, "tbten");
  valid &= checkPass(pass, "tbmk");
  valid &= checkConfirm(confirmPass, pass, "tbNhapLai");

  if (!valid) {
    return;
  }
  var register = new Register(ten, pass, confirmPass, phone, email, gioiTinh);
  return register;
}
