// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDk7iYRRGBOUgqluRCUs9n2nWCbLFyGnLY",
    authDomain: "fir-auth-nd-db-with-react.firebaseapp.com",
    databaseURL: "https://fir-auth-nd-db-with-react-default-rtdb.firebaseio.com",
    projectId: "fir-auth-nd-db-with-react",
    storageBucket: "fir-auth-nd-db-with-react.appspot.com",
    messagingSenderId: "503960447243",
    appId: "1:503960447243:web:a2c79b76cb615e16b7da0e",
    measurementId: "G-1TXNH7L48B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;