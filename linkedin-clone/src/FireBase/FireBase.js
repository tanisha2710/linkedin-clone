import firebase from 'firebase';
const firebaseConfig = {
      apiKey: "AIzaSyBxPMXPIAxBZexgkDUiHnrrqDV2jAeLrZo",
      authDomain: "linkedin-clone-f0f1b.firebaseapp.com",
      projectId: "linkedin-clone-f0f1b",
      storageBucket: "linkedin-clone-f0f1b.appspot.com",
      messagingSenderId: "1018213847139",
      appId: "1:1018213847139:web:76a64220be566f5c126856"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 