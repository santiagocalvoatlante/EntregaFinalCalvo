
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCuLgLUP8JHmT3ir8mnzN5TUM_aQHPTqVg",
  authDomain: "javshoesmdq.firebaseapp.com",
  projectId: "javshoesmdq",
  storageBucket: "javshoesmdq.appspot.com",
  messagingSenderId: "789749486954",
  appId: "1:789749486954:web:7b0824325912a77a5e0113"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);