import React, {Routes, Route, useNavigate, useState} from 'react';
import LoginForm from './component/LoginForm';
import logo from './logo.svg';
import './App.css';

function App() {


  const[user, setUser] = useState({name: "", email: ""});
  const[error, setError] = useState("");
  const Login = details => {
    console.log(details);
  }
  const Logout = () => {
    console.log("logout");
  }
  return (
    <div className="App">
      <LoginForm Login={Login} error = {error}/>
    </div>
  );
}

export default App;
