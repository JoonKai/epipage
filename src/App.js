import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cost from './pages/Cost';
import NavbarElement from './components/NavBar/NavbarElement';

function App() {
  return (
    <Router>
      <NavbarElement/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Cost" element={<Cost/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
