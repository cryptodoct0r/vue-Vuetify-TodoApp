import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBdKE7724M1v-Ob4eEIwDwAIO8ZKSCpiWU",
    authDomain: "todo-vue-vuetify.firebaseapp.com",
    databaseURL: "https://todo-vue-vuetify.firebaseio.com",
    projectId: "todo-vue-vuetify",
    storageBucket: "todo-vue-vuetify.appspot.com",
    messagingSenderId: "641267623469",
    appId: "1:641267623469:web:549e66fa40a8b179"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// db.settings({
//     timestampInSnapshots: true
// })

export default db;