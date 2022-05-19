// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAU575x3AY8smd7oBlTmySa21wQdqvbIJ8",
    authDomain: "task-tracker-f83f2.firebaseapp.com",
    projectId: "task-tracker-f83f2",
    storageBucket: "task-tracker-f83f2.appspot.com",
    messagingSenderId: "229883594354",
    appId: "1:229883594354:web:bb72b2cb7642d39a1224eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);


export default auth;