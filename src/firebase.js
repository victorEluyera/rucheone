import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDlzuXrNp24CGSv5G2mWGa627kr3MmT8p0",
  authDomain: "ruche2.firebaseapp.com",
  projectId: "ruche2",
  storageBucket: "ruche2.appspot.com",
  messagingSenderId: "670193911074",
  appId: "1:670193911074:web:4381be1b23a353ea4b917b",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
