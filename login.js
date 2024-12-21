// login.js

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy giá trị từ form đăng nhập
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiểm tra thông tin đăng nhập (ở đây giả lập với tài khoản mặc định)
    if (username === "user" && password === "password") {
      // Lưu trạng thái đăng nhập vào localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Chuyển hướng đến trang chủ hoặc trang đặt vé sau khi đăng nhập thành công
      window.location.href = "flight-search.html"; // Hoặc trang đặt vé của bạn
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  });
