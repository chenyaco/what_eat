import { initializeApp } from "firebase/app";

import { getDatabase, ref, set, child, get } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDANZXYT4yoYneUmbgsNLId2ormLaRglAs",
    authDomain: "whateat-data.firebaseapp.com",
    projectId: "whateat-data",
    storageBucket: "whateat-data.appspot.com",
    messagingSenderId: "847774448546",
    appId: "1:847774448546:web:95a1aa3fc7fdce777810fb",
    measurementId: "G-YZQCLXYD2H",
    databaseURL: "https://whateat-data-default-rtdb.asia-southeast1.firebasedatabase.app",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

// const db = getFirestore(app);

export { getDatabase, ref as firebaseRef, set, child, get}  

// import { getFirestore, doc, setDoc } from "firebase/firestore"
// const firebaseConfig = {
//   apiKey: "AIzaSyDANZXYT4yoYneUmbgsNLId2ormLaRglAs",
//   authDomain: "whateat-data.firebaseapp.com",
//   databaseURL: "https://whateat-data-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "whateat-data",
//   storageBucket: "whateat-data.appspot.com",
//   messagingSenderId: "847774448546",
//   appId: "1:847774448546:web:95a1aa3fc7fdce777810fb",
//   measurementId: "G-YZQCLXYD2H"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore();
// export { db, doc, setDoc}  