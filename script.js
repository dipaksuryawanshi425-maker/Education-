let captcha = "";

function generateCaptcha() {
  captcha = Math.random().toString(36).substring(2, 7);
  document.getElementById("captchaText").innerText = captcha;
}
generateCaptcha();

function showRegister() {
  register.style.display = "block";
  login.style.display = "none";
}

function showLogin() {
  register.style.display = "none";
  login.style.display = "block";
}

function register() {
  let u = ruser.value;
  let p = rpass.value;
  let cp = rcpass.value;
  let c = captchaInput.value;
  let chk = confirmCheck.checked;

  if (!u || !p || !cp) return rmsg.innerText="सगळी माहिती भरा";
  if (p !== cp) return rmsg.innerText="पासवर्ड जुळत नाही";
  if (c !== captcha) return rmsg.innerText="कॅपच्या चुकीचा आहे";
  if (!chk) return rmsg.innerText="कन्फर्म करा";

  localStorage.setItem("user", u);
  localStorage.setItem("pass", p);
  rmsg.style.color="green";
  rmsg.innerText="खाते तयार झाले";
}

function login() {
  let u = luser.value;
  let p = lpass.value;

  if (
    u === localStorage.getItem("user") &&
    p === localStorage.getItem("pass")
  ) {
    window.location="dashboard.html";
  } else {
    lmsg.innerText="चुकीची माहिती";
  }
}
