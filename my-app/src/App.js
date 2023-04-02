import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCffyvtBAMhigeBEVt5cW28KjmWLn2JfOM",
  authDomain: "illia-project.firebaseapp.com",
  projectId: "illia-project",
  storageBucket: "illia-project.appspot.com",
  messagingSenderId: "381505748974",
  appId: "1:381505748974:web:d158d621f297abf8c4d8ff",
  measurementId: "G-DLPCRYZ5VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
