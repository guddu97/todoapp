import Todoapp from "./Component/Todoapp";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV44ScEppljiMRJxb3IuZcpROwmnAy-LI",
  authDomain: "todoapp-c62e8.firebaseapp.com",
  projectId: "todoapp-c62e8",
  storageBucket: "todoapp-c62e8.appspot.com",
  messagingSenderId: "309016118262",
  appId: "1:309016118262:web:d3a1983b0e88eb26de7dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (  
    <>
    <Todoapp/>
    </>
  );
}

export default App ;