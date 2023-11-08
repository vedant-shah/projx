import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCA7JnQu1EuquJvQR9P1O1gpeg6ftba0yU",
  authDomain: "lets-do-it-3cc39.firebaseapp.com",
  projectId: "lets-do-it-3cc39",
  storageBucket: "lets-do-it-3cc39.appspot.com",
  messagingSenderId: "664713115947",
  appId: "1:664713115947:web:a76002af84b0383f976d6e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
