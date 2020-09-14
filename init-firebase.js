// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBiEdLO-cbmY8flPGGrm-GTAfHOvbkgK4",
    authDomain: "sbn-wsc.firebaseapp.com",
    databaseURL: "https://sbn-wsc.firebaseio.com",
    projectId: "sbn-wsc",
    storageBucket: "sbn-wsc.appspot.com",
    messagingSenderId: "405663187040",
    appId: "1:405663187040:web:a720624a55788a88750305"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();