import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAsVPbZ450Pb4VvY8mHgB9gozJ6hs2qKQA",
    authDomain: "spotify-f6e87.firebaseapp.com",
    databaseURL: "https://spotify-f6e87-default-rtdb.firebaseio.com",
    projectId: "spotify-f6e87",
    storageBucket: "spotify-f6e87.appspot.com",
    messagingSenderId: "213033211672",
    appId: "1:213033211672:web:79eb7c66a763551dd6b06d",
    measurementId: "G-DGKS7TT96J"
  };
  const app = initializeApp(firebaseConfig);
  let obj =[ {email:"Dhanesh"},{password:"123456"}];
  function writeUserData(obj){
  const db = getDatabase();
  const reference = ref(db,"Users/"+userId);
   set(reference,{
       obj
   });
  }

writeUserData(obj);
