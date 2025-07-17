import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home.jsx';
import { React } from 'react'
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div>
        <NavBar></NavBar>
        <Routes>
        <Route path='/' element={<Home/>} /> 
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
