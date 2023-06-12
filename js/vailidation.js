function validation(option) {
  function validate(inputElement, rule) {
    // tin nhắn rổng
    var elementMessage =
      inputElement.parentElement.querySelector(".form-message");
    var erroMessage = rule.test(inputElement.value);
    console.log(erroMessage);
    if (erroMessage) {
      elementMessage.innerText = erroMessage;
    } else {
      elementMessage.innerText = "";
    }
  }

  var formElement = document.querySelector(option.form);
  if (formElement) {
    option.rules.forEach(function (rule) {
      console.log(rule);
      var inputElement = formElement.querySelector(rule.selector);
      var elementMessage = document.querySelector(".form-message");
      if (inputElement) {
        inputElement.onblur = function () {
          console.log(inputElement.value);
          validate(inputElement, rule);
          inputElement.oninput = function () {
            elementMessage.innerText = "";
          };
        };
      }
    });
  }
}

validation.isRequiRes = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui Lòng Nhập Trường Này";
    },
  };
};
validation.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return regexEmail.test(value)
        ? undefined
        : "Vui lòng nhập định dạng Email";
    },
  };
};
validation.isPass = function (selector, min, max) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min && value.length < max
        ? undefined
        : `Vui lòng nhập lớn hơn ${min} và nhỏ hơn ${max} ký tự`;
    },
  };
};
validation.isPhone = function (selector, nume) {
  return {
    selector: selector,
    test: function (value) {
      return value.length == nume
        ? undefined
        : `Vui lòng nhập đúng định dạng có ${nume} chữ số`;
    },
  };
};

validation.isConfirm = function (selector, getValuePass) {
  return {
    selector: selector,
    test: function (value) {
      return value === getValuePass()
        ? undefined
        : "Giá trị không trùng khớp với mật khẩu";
    },
  };
};
