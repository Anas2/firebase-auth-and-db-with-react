// For auth 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// For db 
import { getDatabase, ref, set ,onValue } from "firebase/database";

import app from "./Firebaseconfig";
const db = getDatabase(app);


const auth = getAuth(app);


let signUp = (obj) => {
    // console.log(obj, "here");
    return new Promise((resolve, reject) => {

        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((userData) => {
                // Signed up 
                obj.id = userData.user.uid;
                const reference = ref(db, `users/${obj.id}`);
                set(reference, obj)
                    .then(() => {
                        resolve("Data Send Successfully in Database and User Created");

                    })
                    .catch((err) => {
                        reject(err.message);
                    });
                console.log("User signed up Succesfully");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    })


}

let loginUser = (obj) => {
   
    return new Promise((resolve, reject) => {

        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((userData) => {
                // Signed in 
                const reference = ref(db, `users/${userData.user.uid}`);
                onValue(reference, (data) => {
                    if (data.exists()) {
                        resolve(data.val());
                        
                    } else {
                        reject("Data Not Found :(");
                    }
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    });
}

export { loginUser, signUp };