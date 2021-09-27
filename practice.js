const firebaseConfig = {
    apiKey: "AIzaSyDPekIvu7hs_z9xujMQPm2QcC1isxvD4Rw",
    authDomain: "projecc-a8fcb.firebaseapp.com",
    databaseURL: "https://projecc-a8fcb-default-rtdb.firebaseio.com",
    projectId: "projecc-a8fcb",
    storageBucket: "projecc-a8fcb.appspot.com",
    messagingSenderId: "623142365263",
    appId: "1:623142365263:web:2fe4df3b758a22ee6a623a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function Click(){ 
      var username = document.getElementById("username").value
      var birthday = document.getElementById("birthday").value
      var mobilenumber = document.getElementById("mobilenumber").value
      firebase.database().ref("/").child(username).update({
          purpose:"addingusername"
      })
  }