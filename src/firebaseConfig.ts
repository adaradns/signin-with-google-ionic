import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAQb11DS6AQHrkjQLCR21lP1G-wwx_whxQ",
    authDomain: "encuentros-app-fe996.firebaseapp.com",
    projectId: "encuentros-app-fe996",
    storageBucket: "encuentros-app-fe996.appspot.com",
    messagingSenderId: "353578457984",
    appId: "1:353578457984:web:f1ea0cb687a68990dfbf65",
    measurementId: "G-TQY6XBQ1P7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
