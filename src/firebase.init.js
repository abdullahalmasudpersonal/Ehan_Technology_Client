// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf2XDK0dVMuHEsNXINqYIA4eSfl9NcZtU",
  authDomain: "mangrove50.firebaseapp.com",
  projectId: "mangrove50",
  storageBucket: "mangrove50.appspot.com",
  messagingSenderId: "828303329230",
  appId: "1:828303329230:web:909b65bb0debe4121acd9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;