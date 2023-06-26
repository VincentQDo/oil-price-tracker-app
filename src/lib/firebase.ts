// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBcHs9F1cB1r1RrWNAP6q_XlQJ6NKiDciU',
	authDomain: 'codephoenix-2b1a0.firebaseapp.com',
	projectId: 'codephoenix-2b1a0',
	storageBucket: 'codephoenix-2b1a0.appspot.com',
	messagingSenderId: '804928323675',
	appId: '1:804928323675:web:4fd7cf2c26c585d8ad3f7e',
	measurementId: 'G-95H1G851S4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log('firebase initializing should be once.');

export { app, analytics };
