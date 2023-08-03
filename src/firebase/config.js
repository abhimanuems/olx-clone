import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCI8bsvN-nHu-kFeE9SXYtHtHTtBKmKXNQ",
  authDomain: "olx-clone-d8f03.firebaseapp.com",
  projectId: "olx-clone-d8f03",
  storageBucket: "olx-clone-d8f03.appspot.com",
  messagingSenderId: "276375867818",
  appId: "1:276375867818:web:4c3569accc6121b4f61bd3",
  measurementId: "G-XP1EEL5VL5",
};

  export default firebase.initializeApp(firebaseConfig)