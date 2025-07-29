import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup , getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCjym76Jc0GHuHC8PzxHy5VDgdU_UKTSaE",
  authDomain: "blog-f995f.firebaseapp.com",
  projectId: "blog-f995f",
  storageBucket: "blog-f995f.appspot.com",
  messagingSenderId: "86593929521",
  appId: "1:86593929521:web:853283540e2e4c3055f010"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth=getAuth();

export const authWithGoogle = async () => {
    let user = null;
    await signInWithPopup(auth,provider)
    .then((result) => {
        user=result.user
    })
    .catch((err) => {
        console.log(err);
    })
    return user;
}