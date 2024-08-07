


// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


// firestore

import { doc, setDoc,getFirestore ,collection, startAt,addDoc,onSnapshot,orderBy,deleteDoc ,serverTimestamp, query, where,limit   } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// storage
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyAAFCfzc0RM7pWN54L79Q5mX4a2snu3VmA",
  authDomain: "extended-legend-415308.firebaseapp.com",
  projectId: "extended-legend-415308",
  storageBucket: "extended-legend-415308.appspot.com",
  messagingSenderId: "769368000323",
  appId: "1:769368000323:web:186f4630f1d4118f6cd1f6",
  measurementId: "G-FMMPHYKG3Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  doc, 
  setDoc,
  db,
  collection,
   addDoc,
   onSnapshot,
   deleteDoc ,
   serverTimestamp ,
   query,
    where,
    limit,
    orderBy,
    startAt,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
};

