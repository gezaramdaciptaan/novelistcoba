import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAOKsfYNzRerw7N67cszMsZs_92n0iDfxk",
    authDomain: "novelist-ab375.firebaseapp.com",
    databaseURL: "https://novelist-ab375.firebaseio.com",
    projectId: "novelist-ab375",
    storageBucket: "novelist-ab375.appspot.com",
    messagingSenderId: "837745492262",
    appId: "1:837745492262:web:972d8bf0b56aec2ce681e7",
    measurementId: "G-H329NT0TYC"
  };
 
  // Initialize Firebase
  firebase.initializeApp(config);
  

  export default firebase;