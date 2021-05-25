import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBu1hH5qdbBfh9B0gCx5rlSsls1CvRgnWM",
    authDomain: "fir-b70a4.firebaseapp.com",
    projectId: "fir-b70a4",
    storageBucket: "fir-b70a4.appspot.com",
    messagingSenderId: "850078287373",
    appId: "1:850078287373:web:a0ead789849bbc27183744"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;