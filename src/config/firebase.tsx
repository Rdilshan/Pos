
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDmhLfrf0NdutwZcAR-fQyRXOqUE61zcG8",
  authDomain: "pos-system-d7c51.firebaseapp.com",
  projectId: "pos-system-d7c51",
  storageBucket: "pos-system-d7c51.appspot.com",
  messagingSenderId: "165357455004",
  appId: "1:165357455004:web:a401be3dd0104bea774f59",
  measurementId: "G-5SZQDY8ZBE"
};


const app = initializeApp(firebaseConfig);


export default app;
