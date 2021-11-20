var firebaseConfig = {
    apiKey: "AIzaSyCg3-SBMHf3EhnMpGDVQ5vWyQRZGUO5rzw",
    authDomain: "kwiter-843ae.firebaseapp.com",
    databaseURL: "https://kwiter-843ae-default-rtdb.firebaseio.com",
    projectId: "kwiter-843ae",
    storageBucket: "kwiter-843ae.appspot.com",
    messagingSenderId: "613577736746",
    appId: "1:613577736746:web:318692d46c1a5cfc22b953",
    measurementId: "G-2GPEVXS4TP"
  };
  
  
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}