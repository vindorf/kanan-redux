import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyCX5784R5ucwPCPYoatZFCDmDGu43ynp-s",  
    authDomain: "kanan-b49d1.firebaseapp.com",  
    projectId: "kanan-b49d1",  
    storageBucket: "kanan-b49d1.appspot.com",  
    messagingSenderId: "942029116883",  
    appId: "1:942029116883:web:d2122a16c803d74198cb26",  
    measurementId: "G-JFQZH3PZ5R"
  
  };
  
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  export const db = getFirestore(app);