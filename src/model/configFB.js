import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC085dvVI3rSa_M8AjqbCbPvr8c_Brm6gE",
  authDomain: "schedule-3f253.firebaseapp.com",
  databaseURL: "https://schedule-3f253.firebaseio.com",
  projectId: "schedule-3f253",
  storageBucket: "schedule-3f253.appspot.com",
  messagingSenderId: "1057204548963",
  appId: "1:1057204548963:web:8417d75cce839c212f8f56"
};

// Initialize Firebase
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
