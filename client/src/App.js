import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import Dashboard from './components/Dashboard'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Container>
        <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
