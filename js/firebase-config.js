import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZITj4OoSGwCNiNq2DVe1RsMRg3k7AvZA",
  authDomain: "group-project-2-110c3.firebaseapp.com",
  databaseURL: "https://group-project-2-110c3-default-rtdb.firebaseio.com",
  projectId: "group-project-2-110c3",
  storageBucket: "group-project-2-110c3.firebasestorage.app",
  messagingSenderId: "346100129119",
  appId: "1:346100129119:web:aa142283b3f3d3acebaaea",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);