import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnKhLSpfRV1_2VrD9xoLcA3Kl-q9Ug_YE",
  authDomain: "music-collection-2d336.firebaseapp.com",
  projectId: "music-collection-2d336",
  storageBucket: "music-collection-2d336.appspot.com",
  messagingSenderId: "1056605147144",
  appId: "1:1056605147144:web:1a317a0b865e4373fb41bd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }