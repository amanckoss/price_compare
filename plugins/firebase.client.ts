import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import {defineNuxtPlugin} from "#app";

defineNuxtPlugin(nuxtApp => {

    const firebaseConfig = {
        apiKey: "AIzaSyAhx9n8AGPzXhbpKfzZlrI1sFVh9sOxzU0",
        authDomain: "pricecompare-60ee2.firebaseapp.com",
        projectId: "pricecompare-60ee2",
        storageBucket: "pricecompare-60ee2.appspot.com",
        messagingSenderId: "255107065828",
        appId: "1:255107065828:web:79b85144f703df42a189f1",
        databaseURL: 'https://pricecompare-60ee2-default-rtdb.europe-west1.firebasedatabase.app/'
    };

    const app = initializeApp(firebaseConfig)

    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})