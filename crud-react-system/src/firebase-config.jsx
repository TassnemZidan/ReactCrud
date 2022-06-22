import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCkYWJ8wsmEb_YfrD5RGJKW49FhS0q-x0c",
    authDomain: "react-crud-project-195b8.firebaseapp.com",
    projectId: "react-crud-project-195b8",
    storageBucket: "react-crud-project-195b8.appspot.com",
    messagingSenderId: "661371354376",
    appId: "1:661371354376:web:3ef6e9cc87db4e25cd40bd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();