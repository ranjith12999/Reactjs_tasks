import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyB-ZIh7z3N4f4L2PREB2NcItC_yXq2M4m0",
    authDomain: "ceg-seller.firebaseapp.com",
    projectId: "ceg-seller",
    storageBucket: "ceg-seller.appspot.com",
    messagingSenderId: "705755049517",
    appId: "1:705755049517:web:5b9320651091d8753752a4",
    measurementId: "G-S5817M0Y9X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;