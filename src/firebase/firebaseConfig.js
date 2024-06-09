import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBm_pkcnHRHyGsj4dHJbhn470GDnMySYeg',
  authDomain: 'agctech-8f29b.firebaseapp.com',
  databaseURL:
    'https://agctech-8f29b-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'agctech-8f29b',
  storageBucket: 'agctech-8f29b.appspot.com',
  messagingSenderId: '554413010834',
  appId: '1:554413010834:web:eee8a68c810622a0959b4b',
  measurementId: 'G-ES6XDV0TBS',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
