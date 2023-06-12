function getAllSanPham() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    ResponseType: "JSON",
  });
  promise.then(function (res) {
    console.log(res);
    renderGiaoDien(res.data.content);
  });
  promise.catch(function (orr) {
    console.log(orr);
  });
}

getAllSanPham();
function renderGiaoDien(array) {
  var content = "";
  for (var i = 0; i < array.length; i++) {
    var sanPham = array[i];

    content += `
        <div class="product_item">
        <a href="./delte.html?id=${sanPham.id}" onclick="thongTinSanPham()" ><img src="${sanPham.image}" alt=""></a>
                    <div class="product_text">
                        <h3>${sanPham.name} <span>${sanPham.price}</span></h3>

                        <div class="rate_buy">
                            <div class="rate">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <button><i class="fa-solid fa-cart-shopping"></i> Mua Ngay</button>
                        </div>
                    </div>
                </div>
        `;
  }
  document.getElementById("Featured_Products").innerHTML = content;
}

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
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    ResponseType: JSON,
    data: formDangKy,
  });
  promise.then(function (res) {});
  promise.catch(function (orr) {});
}

if (
  document.getElementById("ten") != null &&
  document.getElementById("ten") != undefined
) {
  setRegister();
}

// ====thông tin sản phẩm=========
// function thongTinSanPham() {
//   var idSanPham = new SanPham();
//   console.log(idSanPham);
//   var promise = axios({
//     url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idSanPham.id}`,
//     method: "GET",
//     ResponseType: "JSON",
//   });
//   promise.then(function (res) {
//     giaoDienThongTin(res.data.content2);
//   });
//   promise.catch(function (orr) {});
// }

// giaodien thông tin san phẩm
// function giaoDienThongTin(array) {
//   var content2 = "";
//   for (var i = 0; i < array.length; i++) {
//     var sanPham = array[i];

//     content2 += processData(sanPham);
//     document.getElementById("thongTin").innerHTML = content2;
//   }
// }

// function processData(sanPham) {
//   return `
//   <div class="realate_img">
//   <img src="${sanPham.image}" alt="">
// </div>

// <div class="realate_text">
//   <h3>product name</h3>
//   <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dicta iure totam facilis
//       optio libero, voluptas hic sunt laboriosam. Harum!</p>
//   <div class="realate_size">
//       <h4>${sanPham.name}</h4>
//       <div class="size">
//           <P>
//               ${sanPham.[size]}
//           </P>
//       </div>
//       <div class="giatien">
//           <h1>${sanPham.price}</h1>
//       </div>
//       <div class="sort">
//           <button onclick="giam()">-</button>
//           <h2 id="hienThiSoLuong">0</h2>
//           <button onclick="tang()">+</button>
//       </div>

//   </div>
// </div>
//       `;
// }
