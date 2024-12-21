// choose-class.js

document.addEventListener("DOMContentLoaded", function () {
  // Lấy thông tin chuyến bay đã chọn từ localStorage
  const selectedFlight = localStorage.getItem("selectedFlight");

  // Hiển thị thông tin chuyến bay
  const flightInfoElement = document.getElementById("selected-flight-info");
  flightInfoElement.textContent = selectedFlight || "Chưa chọn chuyến bay";

  // Xử lý sự kiện khi người dùng chọn Phổ thông
  document
    .getElementById("economy-class")
    .addEventListener("click", function () {
      // Lưu loại vé đã chọn vào localStorage hoặc sessionStorage
      localStorage.setItem("selectedClass", "Phổ Thông");
      // Chuyển hướng đến trang thanh toán (có thể là `payment.html`)
      window.location.href = "payment.html";
    });

  // Xử lý sự kiện khi người dùng chọn Thương gia
  document
    .getElementById("business-class")
    .addEventListener("click", function () {
      // Lưu loại vé đã chọn vào localStorage hoặc sessionStorage
      localStorage.setItem("selectedClass", "Thương Gia");
      // Chuyển hướng đến trang thanh toán (có thể là `payment.html`)
      window.location.href = "payment.html";
    });
});
