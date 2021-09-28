import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCSYAU0UPU0y7vsaPeaau_vv5atYgePgWg",
    authDomain: "open-weather-web-app.firebaseapp.com",
    projectId: "open-weather-web-app",
    storageBucket: "open-weather-web-app.appspot.com",
    messagingSenderId: "899153117442",
    appId: "1:899153117442:web:10dcbb47a994982eb9021b",
    measurementId: "G-9W563TTHKX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
// const auth = getAuth();
console.log(db)

export {collection, addDoc, db, getDocs}
