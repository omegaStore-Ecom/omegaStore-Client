import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "@firebase/storage";
const firebaseConfig = {
  apiKey: 'AIzaSyBac1aGm0L3z2u1vPDp6tzk9ccD6LYrsx8',
  authDomain: 'cryptom-d017a.firebaseapp.com',
  projectId: 'cryptom-d017a',
  storageBucket: 'cryptom-d017a.appspot.com',
  messagingSenderId: '2150346661',
  appId: '1:2150346661:web:515b06cbe76776091f824c',
  measurementId: 'G-NGG7SMLBJQ',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);