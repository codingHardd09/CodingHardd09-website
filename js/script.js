window.onscroll = function() {scroll()};

function scroll() {
    // console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector("nav.main").style.cssText = "background-color: #e74c3c; height: 60px;";
        document.querySelector("main.aboutUs").style.backgroundColor = "#e74c3c";
        document.querySelector("nav.main .logo").style.lineHeight = "60px";
        document.querySelector("nav.main ul").style.lineHeight = "60px";
    }
    else {
        document.querySelector("nav.main").style.cssText = "background-color: transparent; height: 60px";
        document.querySelector("main.aboutUs").style.backgroundColor = "#e74c3c";
        document.querySelector("nav .logo").style.lineHeight = "60px";
        document.querySelector("nav.main ul").style.lineHeight = "60px";
    }
}

var password_checkbox = document.getElementById("show_password");
document.querySelector("input#password").type = "password";
document.querySelector("input#confirm_password").type = "password";

password_checkbox.addEventListener("click", function() {
    if (password_checkbox.checked) {
        document.querySelector("input#password").type = "text";
        document.querySelector("input#confirm_password").type = "text";
        console.log("Its checked")
    }
    
    else {
        document.querySelector("input#password").type = "password";
        document.querySelector("input#confirm_password").type = "password";
    }
})




var submit = document.getElementById("submit");
document.querySelector(".errors").style.display = "none";
submit.addEventListener("click", function() {
    if (document.querySelector("input#password").value != document.querySelector("input#confirm_password").value) {
        alert("Those passwords didn't match");
        // document.querySelector(".errors").style.display = "block";
        // document.querySelector(".errors h3.errorText").innerText = "Those passwords didn't match";
    }
    else if (document.querySelector("input#password").value.length < 8 && document.querySelector("input#confirm_password").value.length < 8 && document.querySelector("input#password").value.length != 0 && document.querySelector("input#confirm_password").value.length != 0) {
        alert("Password must be at least 8 characters");
        // document.querySelector(".errors").style.display = "block";
        // document.querySelector(".errors h3.errorText").innerText = "Password must be at least 8 characters";
    }    
    //  if (username aleready in server) {alert("This username is aleready on server")}
    else if (document.querySelector("input#password").value === " " && document.querySelector("input#confirm_password").value === " " && document.getElementById("username").value === " ") {
        alert("Please, fill the form");
        // document.querySelector(".errors").style.display = "block";
        // document.querySelector(".errors h3.errorText").innerText = "Please, fill all the fields";
    }
    else if (document.querySelector("#username").value === document.querySelector("input#password").value && document.querySelector("input#confirm_password").value) {
        alert("Password don't be like username!");
        // document.querySelector(".errors").style.display = "block";
        // document.querySelector(".errors h3.errorText").innerText = "Password mustn't be look like username";
    }
    else {
        document.querySelector(".register div form").submit() = true;
    }
})