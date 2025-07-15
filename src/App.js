import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home.jsx';
import { React } from 'react'

function App() {
  return (
    <div>
        <NavBar></NavBar>
        <Routes>
        <Route path='/' element={<Home/>} /> 
        </Routes>
    </div>
  );
}

export default App;
