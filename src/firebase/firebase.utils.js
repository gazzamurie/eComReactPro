import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD0IXkZ9gO_rxcSx9C2_fGP-ki5Lx1e6PA",
    authDomain: "crwn-db-ad648.firebaseapp.com",
    databaseURL: "https://crwn-db-ad648.firebaseio.com",
    projectId: "crwn-db-ad648",
    storageBucket: "crwn-db-ad648.appspot.com",
    messagingSenderId: "808554665632",
    appId: "1:808554665632:web:d9be371410dd57ebf71bc5",
    measurementId: "G-F1E4YPV9Y7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
