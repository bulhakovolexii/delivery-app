// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1N9zJ1i2qge7rClGRsoyrx7wI1wi4Mps",
    authDomain: "delivery-app-a0283.firebaseapp.com",
    projectId: "delivery-app-a0283",
    storageBucket: "delivery-app-a0283.appspot.com",
    messagingSenderId: "336583261501",
    appId: "1:336583261501:web:f4aefa30e562de8740d954"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);