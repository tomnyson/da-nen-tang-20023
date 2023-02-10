import firebase from "firebase/app";
import { config } from "./const";
// Optionally import the services that you want to use
import "firebase/auth";
// import {...} from "firebase/database";
import "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
let app;
if (firebase) {
  app = firebase.initializeApp(config);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
