import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBgCWja8gFogb7TlWpvvNMegH8Ow2SIQvc",
  authDomain: "intan-edwin.firebaseapp.com",
  projectId: "intan-edwin",
  storageBucket: "intan-edwin.appspot.com",
  messagingSenderId: "923077826017",
  appId: "1:923077826017:web:f8e93f8fe97f83c71eaea0",
  measurementId: "G-PDF83JY379"
}

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }