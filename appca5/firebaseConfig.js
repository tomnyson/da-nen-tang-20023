import firebase from "firebase/app";
import { config } from "./const";
// Optionally import the services that you want to use
import "firebase/auth";
// import {...} from "firebase/database";
import "firebase/firestore";
// import {...} from "firebase/functions";
import "firebase/storage";

/**
 * export const config = {
  apiKey: API_URL,
  authDomain: "tns-sendotp.firebaseapp.com",
  projectId: "tns-sendotp",
  storageBucket: "tns-sendotp.appspot.com",
  messagingSenderId: "1005487470840",
  appId: "1:1005487470840:web:46b0f23f276f2fecf6230d",
  measurementId: "G-2GL4PW88CY",
};
 */
// Initialize Firebase
let app;
console.log("firebase,", firebase);
if (firebase) {
  app = firebase.initializeApp(config);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();
export { db, auth, storage };
