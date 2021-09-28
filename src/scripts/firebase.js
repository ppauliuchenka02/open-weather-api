import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJFV6LH6KRY8Bd3NXkWacJtI-2VdRPITQ",
    authDomain: "test-33cd5.firebaseapp.com",
    projectId: "test-33cd5",
    storageBucket: "test-33cd5.appspot.com",
    messagingSenderId: "874303198254",
    appId: "1:874303198254:web:0592a481d1b3140b2f7bbf",
    measurementId: "G-EEP9Q0B96F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
console.log(db)

export {collection, addDoc, db, getDocs}