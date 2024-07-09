import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDyIuQp63U5tp1hUeRfS4O-6FQCOb7zxmw",
  authDomain: "reactdemo2024-7a847.firebaseapp.com",
  projectId: "reactdemo2024-7a847",
  storageBucket: "reactdemo2024-7a847.appspot.com",
  messagingSenderId: "712244888759",
  appId: "1:712244888759:web:10a4633b5fa8a44ac6b932",
  measurementId: "G-GB52ECB9SP"
};

  initializeApp(firebaseConfig);

  const db = getFirestore();

  export {db}