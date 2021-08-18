import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDd3rtDiFe5WZWOv_j5aQeRz1UotlMYhSA",
    authDomain: "myinstagramclone-a0d1f.firebaseapp.com",
    projectId: "myinstagramclone-a0d1f",
    storageBucket: "myinstagramclone-a0d1f.appspot.com",
    messagingSenderId: "13530786335",
    appId: "1:13530786335:web:f9389f3455e7b42571c32a"
}


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export  {db, auth};