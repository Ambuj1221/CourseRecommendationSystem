let isLogin = true;

function toggleAuth() {
  isLogin = !isLogin;
  document.getElementById("authTitle").innerText = isLogin ? "Login" : "Register";
  document.getElementById("authButton").innerText = isLogin ? "Login" : "Register";
  document.querySelector(".toggle-link").innerText = isLogin
    ? "Don't have an account? Register"
    : "Already have an account? Login";
}

document.getElementById("authButton").addEventListener("click", () => {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Please fill in all fields.");
    return;
  }

  if (isLogin) {
    alert(`Welcome back, ${user}!`);
    window.location.href = "index.html";
  } else {
    alert(`Registered as ${user}. You can now log in.`);
    toggleAuth();
  }
});
