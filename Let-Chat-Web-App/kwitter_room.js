

const firebaseConfig = {
      apiKey: "AIzaSyCg3-SBMHf3EhnMpGDVQ5vWyQRZGUO5rzw",
      authDomain: "kwiter-843ae.firebaseapp.com",
      projectId: "kwiter-843ae",
      storageBucket: "kwiter-843ae.appspot.com",
      messagingSenderId: "613577736746",
      appId: "1:613577736746:web:318692d46c1a5cfc22b953",
      measurementId: "G-2GPEVXS4TP"
    };
    
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
      });});}
getData();
