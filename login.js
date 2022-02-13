function login() {
    pass = document.getElementById("pass").value
    if (pass != "") {
        if (pass == "hi") {
            window.location = "list.html"
        }
        else {
            document.getElementById("wrong").innerHTML = "Wrong Password"
        }
    }
    else{
        document.getElementById("wrong").innerHTML = "Password Required"
    }
}