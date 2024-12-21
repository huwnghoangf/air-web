// flight-search.js

// Danh sách các chuyến bay mẫu (bạn có thể thay thế bằng dữ liệu thật từ API hoặc cơ sở dữ liệu)
const flights = [
  {
    departure: "Hà Nội",
    destination: "TPHCM",
    flightNumber: "VN123",
    departureTime: "2024-12-22 08:00",
    price: 1000000,
  },
  {
    departure: "Hà Nội",
    destination: "TPHCM",
    flightNumber: "VN124",
    departureTime: "2024-12-22 12:00",
    price: 1200000,
  },
  {
    departure: "Hà Nội",
    destination: "Đà Nẵng",
    flightNumber: "VN125",
    departureTime: "2024-12-22 10:00",
    price: 900000,
  },
  {
    departure: "TPHCM",
    destination: "Hà Nội",
    flightNumber: "VN126",
    departureTime: "2024-12-22 14:00",
    price: 1100000,
  },
  {
    departure: "TPHCM",
    destination: "Đà Nẵng",
    flightNumber: "VN127",
    departureTime: "2024-12-22 16:00",
    price: 950000,
  },
];

// Xử lý tìm vé khi người dùng nhấn nút "Tìm Vé"
document
  .getElementById("flight-search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy điểm đi và điểm đến từ form
    const departure = document.getElementById("departure").value.trim();
    const destination = document.getElementById("destination").value.trim();

    // Kiểm tra nếu điểm đi và điểm đến đã nhập
    if (departure === "" || destination === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Lọc các chuyến bay phù hợp với điểm đi và điểm đến
    const availableFlights = flights.filter(
      (flight) =>
        flight.departure.toLowerCase() === departure.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase()
    );

    // Hiển thị kết quả
    displayFlights(availableFlights);
  });

// Hàm hiển thị danh sách chuyến bay
function displayFlights(flights) {
  const flightListElement = document.getElementById("flight-list");
  const flightResultsSection = document.getElementById("flight-results");

  // Nếu không có chuyến bay nào phù hợp
  if (flights.length === 0) {
    flightListElement.innerHTML =
      "<p>Không tìm thấy chuyến bay nào phù hợp.</p>";
    flightResultsSection.style.display = "block";
    return;
  }

  // Tạo HTML để hiển thị danh sách chuyến bay
  const flightItems = flights
    .map((flight) => {
      return `
          <div class="flight-item">
              <h3>${flight.flightNumber} - ${flight.departureTime}</h3>
              <p><strong>Điểm đi:</strong> ${
                flight.departure
              } <strong>Điểm đến:</strong> ${flight.destination}</p>
              <p><strong>Giá vé:</strong> ${flight.price.toLocaleString()} VNĐ</p>
              <button onclick="selectFlight('${
                flight.flightNumber
              }')">Chọn chuyến bay</button>
          </div>
      `;
    })
    .join("");

  flightListElement.innerHTML = flightItems;
  flightResultsSection.style.display = "block";
}

// Hàm xử lý khi người dùng chọn chuyến bay
function selectFlight(flightNumber) {
  // Lưu thông tin chuyến bay vào localStorage hoặc sessionStorage để truy xuất ở trang tiếp theo
  localStorage.setItem("selectedFlight", flightNumber);
  // Chuyển hướng đến trang chọn vé
  window.location.href = "choose-class.html";
}

document.addEventListener("DOMContentLoaded", function () {
  // Lắng nghe sự kiện nhấn nút Đăng xuất
  document
    .getElementById("logout-button")
    .addEventListener("click", function () {
      // Xóa thông tin đăng nhập khỏi localStorage
      localStorage.removeItem("loggedInUser");

      // Chuyển hướng về trang đăng nhập
      window.location.href = "main.html";
    });
});
