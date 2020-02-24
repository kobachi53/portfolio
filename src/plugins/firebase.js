import Vue from "vue";
import firebase from "firebase/app";
import "firebase/firestore";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTShx-9VmJJZ3JSiMdEeCLGH1DbgYE2z0",
  authDomain: "newportfolio-cd094.firebaseapp.com",
  databaseURL: "https://newportfolio-cd094.firebaseio.com",
  projectId: "newportfolio-cd094",
  storageBucket: "newportfolio-cd094.appspot.com",
  messagingSenderId: "727360960125",
  appId: "1:727360960125:web:8f457dd6b27964fe546314",
  measurementId: "G-KCX67B1FVM"
});

export const db = firebaseApp.firestore();
