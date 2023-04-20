import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyC_WC0olfJa1cwpbyavOdrA84GJhlpS4DY',
	authDomain: 'chat-3eb0f.firebaseapp.com',
	projectId: 'chat-3eb0f',
	storageBucket: 'chat-3eb0f.appspot.com',
	messagingSenderId: '405420567374',
	appId: '1:405420567374:web:1ded6f848b2bf0794a0c1f',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
