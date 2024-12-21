document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    alert("Đăng ký thành công!");

    window.location.href = "login.html"; 
  });
