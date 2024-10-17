// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKEY = process.env.EXPO_PUBLIC_API_KEY

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: apiKEY,
    authDomain: "reactnativepaperapp.firebaseapp.com",
    projectId: "reactnativepaperapp",
    storageBucket: "reactnativepaperapp.appspot.com",
    messagingSenderId: "824338151354",
    appId: "1:824338151354:web:e5b9fbbdd74469f56acf83",
    measurementId: "G-QYEJPDL924"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
//const analytics = getAnalytics(firebaseApp)

export default firebaseApp