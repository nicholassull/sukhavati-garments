//Creates an app instance based off config
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_AI_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID

};

const firebaseApp = initializeApp(firebaseConfig);

//GoogleAuthProvider is a class created by Google and a project may have multiple providers with different functions. That is why we use 'new' here.
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  //Everytime someone interacts with the auth provider, they must always select an account.
  prompt: "select_account"
});

//There is only ever 1 auth in a project that will be tracked once it is initialized. 
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);