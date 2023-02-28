import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {

  apiKey: "AIzaSyBZUKrdf3xRL4pul28JCIzOr_gwTl4eBj8",

  authDomain: "challenge-d0735.firebaseapp.com",

  projectId: "challenge-d0735",

  storageBucket: "challenge-d0735.appspot.com",

  messagingSenderId: "261506855169",

  appId: "1:261506855169:web:fb6dfcca03986eb7d76b00",

  measurementId: "G-ZNH9CXQX6H"

};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export default app;