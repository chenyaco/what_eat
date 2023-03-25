import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore"
import { getDatabase, ref, set, child, get } from "firebase/database";

const firebaseConfig = {
    // apiKey: "AIzaSyCRT5wy2QOVle0dZ9QHjHEDiuL88QKIBdE",
    // authDomain: "testfirebase-f0c43.firebaseapp.com",
    // projectId: "testfirebase-f0c43",
    // storageBucket: "testfirebase-f0c43.appspot.com",
    // messagingSenderId: "727480970113",
    // appId: "1:727480970113:web:fb7417042bb530ae7c9680",
    // measurementId: "G-01QTT64E1Z",
    // //這個要放資料庫路徑
    // databaseURL: "https://testfirebase-f0c43-default-rtdb.asia-southeast1.firebasedatabase.app",
    
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