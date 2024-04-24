if (localStorage.getItem("connected") != "true") {
  window.location.href = "inscription.html";
}

function logout() {
  localStorage.removeItem("connected");
  localStorage.removeItem("token");
  window.location.href = "inscription.html";
}

let data = localStorage.getItem("token");
console.log(data);

fetch("http://127.0.0.1:3000/getMyProfile", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${data}`,
  },
})
  .then((res) => console.log(res))
  .then((data) => {
    console.log(data);
  });
