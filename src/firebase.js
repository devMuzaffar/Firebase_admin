import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "reactadmin-6e51b.firebaseapp.com",
  projectId: "reactadmin-6e51b",
  storageBucket: "reactadmin-6e51b.appspot.com",
  messagingSenderId: "950448803322",
  appId: "1:950448803322:web:9249a2e481009a4e422843",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);