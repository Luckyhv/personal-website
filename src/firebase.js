import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBgvFjlhP42wFHxIbuqRs2az55ST-YtYQs",
  authDomain: "portfolio-dashboard-8f800.firebaseapp.com",
  projectId: "portfolio-dashboard-8f800",
  storageBucket: "portfolio-dashboard-8f800.appspot.com",
  messagingSenderId: "1017224388215",
  appId: "1:1017224388215:web:7844d1dafeb47b9b14f072"
};

const app = firebase.initializeApp(firebaseConfig);
export default app;