function Auth() {

const firebaseConfig = {
  apiKey: "AIzaSyBU-nWEb2C6TB9hwcJgl0oK5vDsm4b3Bjc",
  authDomain: "badbank-addf2.firebaseapp.com",
  projectId: "badbank-addf2",
  storageBucket: "badbank-addf2.appspot.com",
  messagingSenderId: "595019698861",
  appId: "1:595019698861:web:84ec7978189ca7d3d02c24",
};

// initialize Firebase
firebase.initializeApp(firebaseConfig);


//LOGOUT
logout.addEventListener("click", (e) => {
  firebase.auth().signOut();
});

}

Auth();