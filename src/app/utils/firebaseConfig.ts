import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: process.env.API_KEY,  
    authDomain: process.env.AUTH_DOMAIN,  
    projectId: process.env.PROJECT_ID,  
    storageBucket: process.env.BUCKET,  
    messagingSenderId: process.env.SENDER_ID,  
    appId: process.env.APP_ID,  
    measurementId: process.env.MEASUREMENT_ID
  
  };
  
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  export const db = getFirestore(app);