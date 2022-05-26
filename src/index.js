import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAKK99P6rShfbVDr7bV7pUx2itfWZIpcI",
  authDomain: "e-commerce-con-react.firebaseapp.com",
  projectId: "e-commerce-con-react",
  storageBucket: "e-commerce-con-react.appspot.com",
  messagingSenderId: "813881955082",
  appId: "1:813881955082:web:acf1204dd8fd9df08fe0f3"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

