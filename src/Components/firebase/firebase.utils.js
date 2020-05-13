import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC_Spr0anNXvjDW9xx21IvDAL59dteKP2A",
  authDomain: "ahmedgrewallclothings.firebaseapp.com",
  databaseURL: "https://ahmedgrewallclothings.firebaseio.com",
  projectId: "ahmedgrewallclothings",
  storageBucket: "ahmedgrewallclothings.appspot.com",
  messagingSenderId: "577702534829",
  appId: "1:577702534829:web:6abba4d7da956e5bb07024",
  measurementId: "G-S2ZX1HCR70"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
