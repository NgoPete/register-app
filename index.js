// 1. Bắt sự kiện submit vào button

const submit = document.getElementById("info");

// 2. Lấy data từ các ô dữ liệu
submit.addEventListener("submit", (e) => {
  const fullName = document.getElementById("name").value;
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const city = document.getElementById("city").value;
  const render = document.getElementById("render");
  render.style.display = "block";
  // console.log(fullName);

  // 3. Validate data
  if (fullName.length < 2) {
    alert("your name must contain more than 2 letters");
    return false;
  } else if (userName.length < 2 || userName.trim() == "") {
    alert("your user name must contain more than 2 letters");
    return false;
  } else if (password.length < 6) {
    alert("your password must contain more than 6 letters");
    return false;
  }

  // 4. Xử lý data từ city form
  function showCity(city) {
    let cityname = [];
    cityname[1] = "Hà Nội";
    cityname[2] = "Đà Nẵng";
    cityname[3] = "Sài Gòn";
    cityname[4] = "Cần Thơ";
    cityname[5] = "Thành phố khác";
    return cityname[city];
  }

  // 5. Render data
  render.innerHTML = `
  Fullname: <b>${fullName}</b><br />
  Username: <b>${userName}</b><br />
  Password: <b>${password}</b><br />
  City: <b>${showCity(city)}</b>
  `;

  e.preventDefault();
});
