import firebase from "firebase/app";
import "firebase/auth";
import { config } from "./const";
// Your app's Firebase configuration
const firebaseConfig = {
  // Your config here
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
