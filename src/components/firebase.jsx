import React from 'react'
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

export const firebaseConfig = {
  apiKey: "AIzaSyBKVbwJUf_c7OpxG08jbtUda2SBXXIwcyg",
  authDomain: "movie-app-380419.firebaseapp.com",
  projectId: "movie-app-380419",
  storageBucket: "movie-app-380419.appspot.com",
  messagingSenderId: "933346313398",
  appId: "1:933346313398:web:d2ef38196ade2f5d0e1217"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })