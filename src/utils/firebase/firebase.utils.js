//Creates an app instance based off config
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

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
//Directly points to our DB and lets us get and set documents.
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //Creates a reference to a document in the db, whether or not the document exists yet.
  //3 Args of Doc(): the databse, collection, document ID
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  //Check whether the snapshot of the docRef actually contains a document/document exists.
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //Creates or updates a doc. First argument is docRef, second is data to enter. If done like this, vatriable names will be key and variable value will be value.
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
        //same as bellow
        //displayName: "Nicholas Sullivan",
        //email: "nicholassull@gmail.com"
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}