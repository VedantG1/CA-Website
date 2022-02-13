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

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val()
            user_name = childKey;
            user = childKey
            user_detail = childData;
            phone = user_detail['phone_no']
            console.log("Room Name - " + user)
            row = "<div class='roomName' id=" + user + " onclick='redirect(this.id)'> Client Name - " + user +"<br> Client Phone Number - " + phone +"</div><hr>"
            document.getElementById("output").innerHTML += row
        });
    });
}
getData();