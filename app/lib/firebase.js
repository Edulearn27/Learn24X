// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//     apiKey: "AIzaSyDUQVHSbPl8NRz08p3oYHF3dNpt5iq-HTw",
//     authDomain: "learn-ai-academy.firebaseapp.com",
//     projectId: "learn-ai-academy",
//     storageBucket: "learn-ai-academy.firebasestorage.app",
//     messagingSenderId: "1085994376973",
//     appId: "1:1085994376973:web:fe014f0a16ee6d95e91a44",
//     measurementId: "G-LVWD6JQKDE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);





// app/lib/firebase.js (or lib/firebase.js)
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUQVHSbPl8NRz08p3oYHF3dNpt5iq-HTw",
    authDomain: "learn-ai-academy.firebaseapp.com",
    projectId: "learn-ai-academy",
    storageBucket: "learn-ai-academy.firebasestorage.app",
    messagingSenderId: "1085994376973",
    appId: "1:1085994376973:web:fe014f0a16ee6d95e91a44",
    measurementId: "G-LVWD6JQKDE"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);