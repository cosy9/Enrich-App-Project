// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmAAQfY-TpI4vfdzn7B0mCzll0rPkaiE4",
  authDomain: "fir-auth-3de9e.firebaseapp.com",
  projectId: "fir-auth-3de9e",
  storageBucket: "fir-auth-3de9e.appspot.com",
  messagingSenderId: "614127180890",
  appId: "1:614127180890:web:95fd9b83d22c65be740c63"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
} else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth,firebase};