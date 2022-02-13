phone = ""
user = ""

var firebaseConfig = {
    apiKey: "AIzaSyCcY-OBX_voHErST7h0fkU1nModvrMk8QM",
    authDomain: "ca-website-4d034.firebaseapp.com",
    databaseURL: "https://ca-website-4d034-default-rtdb.firebaseio.com",
    projectId: "ca-website-4d034",
    storageBucket: "ca-website-4d034.appspot.com",
    messagingSenderId: "251910749034",
    appId: "1:251910749034:web:08851a88c9344f871c0313"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function register() {
    phone = document.getElementById("phone").value
    user = document.getElementById("user").value
    if (user != "" && phone != "") {
        if (phone.length == 10) {
            document.getElementById("user").value = ""
            document.getElementById("phone").value = ""
            document.getElementById("done").innerHTML = "<img id='img' src='loading img.gif'>"
            setTimeout(() => { document.getElementById("done").innerHTML = "Registered Successfully!, We will get back to you on call soon and will discuss about the services" }, 3000);
            setTimeout(() => { document.getElementById("done").innerHTML = ""; }, 8000);

            firebase.database().ref("/").child(user).update({
                name : user,
                phone_no : phone
          })
        }
        else{
            window.alert("Enter valid phone no.!!")
        }
    }
    else {
        document.getElementById("done").innerHTML = "Username or phone no. field is not filled!"
    }
}