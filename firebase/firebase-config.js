import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZITj4OoSGwCNiNq2DVe1RsMRg3k7AvZA",
    authDomain: "group-project-2-110c3.firebaseapp.com",
    databaseURL: "https://group-project-2-110c3-default-rtdb.firebaseio.com",
    projectId: "group-project-2-110c3",
    storageBucket: "group-project-2-110c3.firebasestorage.app",
    messagingSenderId: "346100129119",
    appId: "1:346100129119:web:aa142283b3f3d3acebaaea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

// Export Firebase instances
export { app, db };