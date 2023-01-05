function login(e) {
    var keynum;    
    console.log("Enter your login");

    if (window.event) {
        keynum = event.keyCode;
    }
    console.log(keynum);
}

window.onload = function() {login()};