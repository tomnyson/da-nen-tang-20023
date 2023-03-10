import { API_KEY } from "@env";
import axios from "axios";

export const config = {
  apiKey: API_KEY,
  authDomain: "tns-sendotp.firebaseapp.com",
  projectId: "tns-sendotp",
  storageBucket: "tns-sendotp.appspot.com",
  messagingSenderId: "1005487470840",
  appId: "1:1005487470840:web:46b0f23f276f2fecf6230d",
  measurementId: "G-2GL4PW88CY",
};

export const convertUriToBlob = async (uri) => {
  try {
    console.log("uri".uri);
    const response = await axios.get(uri, {
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    return null;
  }
};
