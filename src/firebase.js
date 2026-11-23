import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase のコンソールでコピーした firebaseConfig の中身を、ここに貼る
const firebaseConfig = {
  apiKey: "AIzaSyB2TzOztzWqmZ77L5kqT2veURuNPpUWZOM",
  authDomain: "webex-original-app-team1.firebaseapp.com",
  projectId: "webex-original-app-team1",
  storageBucket: "webex-original-app-team1.firebasestorage.app",
  messagingSenderId: "794519363450",
  appId: "1:794519363450:web:06b083c4a5e70debf700c3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
