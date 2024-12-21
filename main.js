// Giả lập trạng thái đăng nhập
let isLoggedIn = false; // Thay đổi giá trị này để kiểm tra đăng nhập

document
  .getElementById("flight-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!isLoggedIn) {
      // Hiển thị thông báo yêu cầu đăng nhập
      alert("Bạn cần đăng nhập để tiếp tục.");

      // Chuyển hướng người dùng đến trang đăng nhập
      window.location.href = "login.html"; // Thay đổi URL nếu cần
      return;
    }

    // Nếu đã đăng nhập, tiếp tục xử lý đặt vé
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;

    // Hiển thị kết quả tìm kiếm (thực tế cần kết nối API hoặc cơ sở dữ liệu)
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Thông tin tìm kiếm:</h3>
        <p><strong>Điểm đi:</strong> ${departure}</p>
        <p><strong>Điểm đến:</strong> ${destination}</p>
        <p><strong>Ngày khởi hành:</strong> ${departureDate}</p>
        <p><strong>Ngày về:</strong> ${returnDate ? returnDate : "Không có"}</p>
    `;
  });
