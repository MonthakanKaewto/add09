import firebase from "firebase/app";
import "firebase/firestore"

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyAiKrE0KKwCciJ8RURNk6I809skb-fHtak",
        authDomain: "add09-3785c.firebaseapp.com",
        projectId: "add09-3785c",
        storageBucket: "add09-3785c.appspot.com",
        messagingSenderId: "288542301122",
        appId: "1:288542301122:web:ffe68e39f4147107ebd45b"
    };
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();