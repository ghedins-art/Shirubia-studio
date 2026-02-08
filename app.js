const PASSWORD = "Silfr@24";

function login() {
  const value = document.getElementById("password").value;

  if (value === PASSWORD) {
    window.location.href = "home.html";
  } else {
    alert("Password errata");
  }
}
