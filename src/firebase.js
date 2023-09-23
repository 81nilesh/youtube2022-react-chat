import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeO_EWBXw_PUARAAky1IT15wophTAI-SA",
  authDomain: "chat-c5e92.firebaseapp.com",
  projectId: "chat-c5e92",
  storageBucket: "chat-c5e92.appspot.com",
  messagingSenderId: "665064000231",
  appId: "1:665064000231:web:26d83c5e216f116768f042"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
