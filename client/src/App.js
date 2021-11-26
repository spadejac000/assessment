import React, {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {Container} from 'react-bootstrap'
import AppNavbar from './components/AppNavbar'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }

  return (
    <div className="App">
      <Router>
        <AppNavbar/>
        <Container>
          <Routes>
            <Route exact path="/login" element={!isAuthenticated ? <Login  setAuth={setAuth}/> : <Navigate to="/"/>}/>
            <Route exact path="/register" element={!isAuthenticated ? <Register  setAuth={setAuth}/> : <Navigate to="/login"/>}/>
            <Route exact path="/" element={isAuthenticated ? <Dashboard setAuth={setAuth}/> : <Navigate to="login"/>}/>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
