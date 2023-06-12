$(document).ready(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const idProduct = urlParams.get("id");
  if (idProduct != null && idProduct != undefined) {
    thongTinSanPham(idProduct);
  }
});

function thongTinSanPham(id) {
  // var idSanPham = new SanPham();
  console.log(id);
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: "GET",
    ResponseType: "JSON",
  });
  promise.then(function (res) {
    var info = processData(res.data.content);
    document.getElementById("thongTin").innerHTML = info;

    console.log(res.data.content2);
  });
  promise.catch(function (orr) {});
}
function giaoDienThongTin(array) {
  var content2 = "";
  for (var i = 0; i < array.length; i++) {
    var sanPham = array[i];

    content2 += processData(sanPham);
    document.getElementById("thongTin").innerHTML = content2;
  }
}
function giaoDienThongTin(array) {
  var content2 = "";
  for (var i = 0; i < array.length; i++) {
    var sanPham = array[i];

    content2 += processData(sanPham);
    document.getElementById("thongTin").innerHTML = content2;
  }
}
function processData(sanPham) {
  return `
  <div class="realate_img">
  <img src="${sanPham.image}" alt="">
</div>

<div class="realate_text">
  <h3>${sanPham.name}</h3>
  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dicta iure totam facilis
      optio libero, voluptas hic sunt laboriosam. Harum!</p>
  <div class="realate_size">
      <h4>SIZE</h4>
      <div class="size">
          <P>
             <span> ${sanPham.size[0]} </span>
             <span> ${sanPham.size[1]} </span>
             <span> ${sanPham.size[2]} </span>
             <span> ${sanPham.size[3]} </span>
             <span> ${sanPham.size[4]} </span>
             <span> ${sanPham.size[5]} </span>
             <span> ${sanPham.size[6]} </span>
          </P>
      </div>
      <div class="giatien">
          <h1>${sanPham.price}</h1>
      </div>
      <div class="sort">
          <button onclick="giam()">-</button>
          <h2 id="hienThiSoLuong">0</h2>
          <button onclick="tang()">+</button>
      </div>

  </div>
</div>
      `;
}
