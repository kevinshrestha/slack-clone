import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS2cjqTXIraXehiU_kRzMVcGA16rufako",
  authDomain: "slack-clone-c3e30.firebaseapp.com",
  databaseURL: "https://slack-clone-c3e30-default-rtdb.firebaseio.com",
  projectId: "slack-clone-c3e30",
  storageBucket: "slack-clone-c3e30.appspot.com",
  messagingSenderId: "626304178973",
  appId: "1:626304178973:web:9768e0209b164c7a39dff4",
  measurementId: "G-6V8TB3PL7K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;