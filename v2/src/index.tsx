import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBgCWja8gFogb7TlWpvvNMegH8Ow2SIQvc",
//   authDomain: "intan-edwin.firebaseapp.com",
//   projectId: "intan-edwin",
//   storageBucket: "intan-edwin.appspot.com",
//   messagingSenderId: "923077826017",
//   appId: "1:923077826017:web:f8e93f8fe97f83c71eaea0",
//   measurementId: "G-PDF83JY379"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
