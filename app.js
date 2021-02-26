var firebaseConfig = {
	apiKey: "AIzaSyDLy3SeNtBMRQoF37wpAJBCOoLpDAMsL60",
	authDomain: "uno-scorekeeper-66669.firebaseapp.com",
	projectId: "uno-scorekeeper-66669",
	storageBucket: "uno-scorekeeper-66669.appspot.com",
	messagingSenderId: "487704718681",
	appId: "1:487704718681:web:5c77e879c41917978cf048"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();
const playersRef = dbRef.child('players');

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

/*
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
	const playerRef = playersRef.child(user.user.uid);
	playerRef.on("child_added", snap => {
		console.log(snap.key + ": " + snap.val());
	});
	playerRef.update({"score": 3});
  })
  .catch((error) => {
	console.log(error);
  });*/
