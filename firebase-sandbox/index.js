// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7IaYXtSLgvCZOiwwEvJLsrfiY9IFgcD0",
  authDomain: "forward-curve-406820.firebaseapp.com",
  projectId: "forward-curve-406820",
  storageBucket: "forward-curve-406820.appspot.com",
  messagingSenderId: "687450514902",
  appId: "1:687450514902:web:c9472e8636496b658eb077",
  measurementId: "G-81CDER6H6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

const messages = ref(database,'/messages');

onValue(messages, (snapshot) => {

    //console.log(snapshot);

    const ul = document.getElementById("messages");

    ul.replaceChildren();
    snapshot.forEach((childSnapShot)=>{

        const childKey = childSnapShot.key;
        const childData = childSnapShot.val();

        console.log(childKey);
        console.log(childData);

        const text = document.createTextNode(childData.message);
        const timeStamp = document.createTextNode(Date(childData.createdAt));
        
        const liText = document.createElement('li');
        const liTimeStamp = document.createElement('li');
        liText.appendChild(text);
        liTimeStamp.appendChild(timeStamp);
        ul.appendChild(liTimeStamp);
        ul.appendChild(liText);

    });

},{
    onlyOnce: false
});