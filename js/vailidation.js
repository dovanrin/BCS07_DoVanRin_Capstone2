// function validation(option) {
//   function validate(inputElement, rule) {
//     // tin nhắn rổng
//     var elementMessage =
//       inputElement.parentElement.querySelector(".form-message");
//     var erroMessage = rule.test(inputElement.value);
//     console.log(erroMessage);
//     if (erroMessage) {
//       elementMessage.innerText = erroMessage;
//     } else {
//       elementMessage.innerText = "";
//     }
//   }

//   var formElement = document.querySelector(option.form);
//   console.log(option.form);
//   if (formElement) {
//     console.log(formElement);
//     option.rules.forEach(function (rule) {
//       console.log(rule);
//       var inputElement = formElement.querySelector(rule.selector);
//       var elementMessage = document.querySelector(".form-message");
//       if (inputElement) {
//         inputElement.onblur = function () {
//           console.log(inputElement.value);
//           validate(inputElement, rule);
//           inputElement.oninput = function () {
//             elementMessage.innerText = "";
//           };
//         };
//       }
//     });
//   }
// }

// validation.isRequiRes = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value.trim() ? undefined : "Vui Lòng Nhập Trường Này";
//     },
//   };
// };
// validation.isEmail = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {
//       var regexEmail =
//         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//       return regexEmail.test(value)
//         ? undefined
//         : "Vui lòng nhập định dạng Email";
//     },
//   };
// };
// validation.isPass = function (selector, min, max) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value.length >= min && value.length < max
//         ? undefined
//         : `Vui lòng nhập lớn hơn ${min} và nhỏ hơn ${max} ký tự`;
//     },
//   };
// };
// validation.isPhone = function (selector, nume) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value.length == nume
//         ? undefined
//         : `Vui lòng nhập đúng định dạng có ${nume} chữ số`;
//     },
//   };
// };

// validation.isConfirm = function (selector, getValuePass) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value === getValuePass()
//         ? undefined
//         : "Giá trị không trùng khớp với mật khẩu";
//     },
//   };
// };

function kiemTraRong(checkInput, idThongBao) {
  if (checkInput) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = "Nhập dữ liệu vào";
    return false;
  }
}
function kiemTraEmail(checkInput, idThongBao) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var checkEmail = regexEmail.test(checkInput);
  if (checkEmail) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng định dạng Email";
    return false;
  }
}
function kiemTraDoDai(checkInput, min, idThongBao) {
  var doDai = checkInput.length;
  if (doDai == min) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng định dạng";
    return false;
  }
}

// chỉ được nhập chữ
function kiemTraDinhDang(checkInput, idThongBao) {
  var regexTen = /^[\p{L} ]+$/u;
  var checkTen = regexTen.test(checkInput);
  if (checkTen) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng định dạng";
    return false;
  }
}
function checkPass(checkInput, idThongBao) {
  var regexpass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;
  var checkPassword = regexpass.test(checkInput);
  if (checkPassword) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Nhập đúng định dạng: có 6-12 ký tự. 1 in hoa, 1 số, và 1 ký tự đặt biệt";
    return false;
  }
}
function checkConfirm(checkInput, isPass, idThongBao) {
  if (checkInput === isPass) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = "Không trùng với mật khẩu";
    return false;
  }
}
