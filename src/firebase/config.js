import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCuUyAZNrz8fSGo7Z0fGmbmTXKvje9R1Y0",
    authDomain: "demoapp-b6e14.firebaseapp.com",
    databaseURL: "https://demoapp-b6e14.firebaseio.com",
    projectId: "demoapp-b6e14",
    storageBucket: "demoapp-b6e14.appspot.com",
    messagingSenderId: "105052952144",
    appId: "1:105052952144:web:1b4efad7af8a2de3142355",
    measurementId: "G-KFDW9X8TWB"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };