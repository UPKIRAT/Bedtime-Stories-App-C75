import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDZRXtqvoYLU9iu3hF-UoDaWuMzgRkeKys",
  authDomain: "bedtime-stories-app-13e53.firebaseapp.com",
  databaseURL: "https://bedtime-stories-app-13e53.firebaseio.com",
  projectId: "bedtime-stories-app-13e53",
  storageBucket: "bedtime-stories-app-13e53.appspot.com",
  messagingSenderId: "749527486095",
  appId: "1:749527486095:web:ef3a4ea8e0b17349676afa"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
