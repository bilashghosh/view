import React, { useEffect } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import Admin from "./components/Admin.js";
import Home from "./homepage/Home.js"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import { useState } from "react";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      
            <Routes>
            
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              
              <Route path="/admin" element={<Admin />} />
            </Routes>
            <ToastContainer />
       
    </Router>
  );
}

export default App;
