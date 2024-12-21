// profile.js

document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra xem có thông tin người dùng lưu trong localStorage không
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const age = localStorage.getItem("age");
  const sdt = localStorage.getItem("sdt");

  // Nếu có, điền thông tin vào các trường form
  if (username && email && age && sdt) {
    document.getElementById("username").value = username;
    document.getElementById("email").value = email;
    document.getElementById("age").value = age;
    document.getElementById("sdt").value = sdt;
  }
});

document
  .getElementById("profile-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy thông tin từ form
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const sdt = document.getElementById("sdt").value;

    // Lưu thông tin vào localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    localStorage.setItem("sdt", sdt);

    // Thông báo đã lưu thông tin thành công
    alert("Thông tin đã được lưu thành công!");
  });
