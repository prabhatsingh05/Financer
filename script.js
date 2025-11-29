
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const user = document.getElementById("username");
  const pw = document.getElementById("password");
  const userError = document.getElementById("userError");
  const pwError = document.getElementById("pwError");
  const toggle = document.getElementById("togglePw");
  const btn = document.getElementById("signinBtn");
  const btnText = document.getElementById("btnText");

  
  toggle.addEventListener("click", () => {
    if (pw.type === "password") {
      pw.type = "text";
      toggle.textContent = "";
    } else {
      pw.type = "password";
      toggle.textContent = "View";
    }
  });

  
  function validate() {
    let ok = true;
    userError.textContent = "";
    pwError.textContent = "";

    const uVal = user.value.trim();
    const pVal = pw.value.trim();

    if (!uVal) {
      userError.textContent = "Please enter email or mobile";
      ok = false;
    } else {
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^[6-9]\d{9}$/;
      if (!emailRegex.test(uVal) && !mobileRegex.test(uVal)) {
        userError.textContent = "Enter valid email or 10-digit mobile";
        ok = false;
      }
    }

    if (!pVal || pVal.length < 6) {
      pwError.textContent = "Password must be at least 6 characters";
      ok = false;
    }
    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;

    
    btn.classList.add("loading");
    btnText.textContent = "Signing in...";
    setTimeout(() => {
      btn.classList.remove("loading");
      btnText.textContent = "Signed in ✓";
      
      btn.style.background = "linear-gradient(90deg,#00A86B,#34D399)";
      window.location.href = "permission.html";
      setTimeout(() => {
        btnText.textContent = "Sign in";
        btn.style.background = "";
      }, 1500);
    }, 1200);
  });

  
  [user, pw].forEach(el => {
    el.addEventListener("input", () => {
      userError.textContent = "";
      pwError.textContent = "";
    });
  });

});
