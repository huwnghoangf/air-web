// payment.js

document.addEventListener("DOMContentLoaded", function () {
  // Lấy thông tin chuyến bay và loại vé từ localStorage
  const selectedFlight = localStorage.getItem("selectedFlight");
  const selectedClass = localStorage.getItem("selectedClass");

  // Hiển thị thông tin chuyến bay và loại vé
  document.getElementById("payment-flight").textContent =
    selectedFlight || "Chưa chọn chuyến bay";
  document.getElementById("payment-class").textContent =
    selectedClass || "Chưa chọn loại vé";

  // Giá vé mặc định cho mỗi loại vé
  const basePrice = selectedClass === "Phổ Thông" ? 1000000 : 2000000; // Phổ Thông: 1 triệu, Thương Gia: 2 triệu

  // Tính toán và hiển thị tổng giá
  function calculateTotalPrice() {
    const quantity = parseInt(document.getElementById("ticket-quantity").value);
    const seatType = document.getElementById("seat-type").value;

    let seatSurcharge = 0;

    // Phụ phí cho mỗi loại chỗ ngồi
    if (seatType === "Cửa sổ") {
      seatSurcharge = 200000; // Cửa sổ: +200.000
    } else if (seatType === "Lối đi") {
      seatSurcharge = 100000; // Lối đi: +100.000
    }

    // Tính tổng giá vé
    const totalPrice = (basePrice + seatSurcharge) * quantity;
    document.getElementById("price-display").textContent =
      totalPrice.toLocaleString() + " VNĐ";
  }

  // Lắng nghe sự kiện thay đổi số lượng vé và loại chỗ ngồi
  document
    .getElementById("ticket-quantity")
    .addEventListener("input", calculateTotalPrice);
  document
    .getElementById("seat-type")
    .addEventListener("change", calculateTotalPrice);

  // Tính toán giá lần đầu
  calculateTotalPrice();

  // Xử lý sự kiện khi nhấn thanh toán
  document.getElementById("pay-button").addEventListener("click", function () {
    // Ẩn phần thanh toán và hiển thị thông báo thanh toán thành công
    document.querySelector(".payment").style.display = "none";
    document.getElementById("payment-success").style.display = "block";

    // Sau 3 giây, chuyển hướng về trang chủ
    setTimeout(function () {
      window.location.href = "flight-search.html"; // Quay về trang chủ
    }, 3000);
  });
});
