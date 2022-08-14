
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {

  apiKey: "AIzaSyDrLZchjaMjsVhlirlMdsBgLghXEaWxBkc",

  authDomain: "pcmasterrace-shop.firebaseapp.com",

  projectId: "pcmasterrace-shop",

  storageBucket: "pcmasterrace-shop.appspot.com",

  messagingSenderId: "352530988503",

  appId: "1:352530988503:web:6b251eb0758b43c2925f92"

};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
