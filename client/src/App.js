import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Container} from 'react-bootstrap'
import AppNavbar from './components/AppNavbar'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar/>
        <Container>
          <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
