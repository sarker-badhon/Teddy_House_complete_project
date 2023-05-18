// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnpGBjdu2L7dCP9dTFj-oip9hpaQuZrvg",
  authDomain: "teddy-bear-client.firebaseapp.com",
  projectId: "teddy-bear-client",
  storageBucket: "teddy-bear-client.appspot.com",
  messagingSenderId: "615439431000",
  appId: "1:615439431000:web:dd5df8da922e67fa20212d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;