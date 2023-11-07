import React from 'react';
import LoginForm from './component/LoginForm';
import Welcome from './component/Welcome';
import Events from './component/Events';
import Directory from './component/Directory';
import MyEvents from './component/MyEvents';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import FilteredEvents from './component/FilteredEvents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path = "/LoginForm" element={<LoginForm />} />
            <Route path = "/Events" element={<Events />} />
            <Route path = "/Events/Directory" element={<Directory />} />
            <Route path = "/Events/MyEvents" element={<MyEvents />} />
            <Route path = "/Events/FilteredEvents" element={<FilteredEvents />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
