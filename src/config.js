import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth ,GoogleAuthProvider} from "firebase/auth"
  const firebaseConfig = {
    apiKey: "AIzaSyDBO9LJMiMerlqyw105V5ncXZvp1tzk7DQ",
    authDomain: "slack-ec7e8.firebaseapp.com",
    projectId: "slack-ec7e8",
    storageBucket: "slack-ec7e8.appspot.com",
    messagingSenderId: "122804989472",
    appId: "1:122804989472:web:e94ca9969b5d80a0aad645",
    measurementId: "G-YYMHEQD8R6"
  };
 const firebaseApp =  initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);
 const auth = getAuth();
 const provider = new GoogleAuthProvider();
 export {auth, provider,db};
 