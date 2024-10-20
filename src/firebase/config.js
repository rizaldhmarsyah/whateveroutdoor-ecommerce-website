import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBheqo7jiYQ139lnQA2afbnzcEeO7oTSao",
  authDomain: "authenticationtest-bf981.firebaseapp.com",
  projectId: "authenticationtest-bf981",
  storageBucket: "authenticationtest-bf981.appspot.com",
  messagingSenderId: "1023680761562",
  appId: "1:1023680761562:web:9827cc8252f3fa2a615fe3",
};

firebase.initializeApp(firebaseConfig);

const whateverAuth = firebase.auth();

export { whateverAuth };
