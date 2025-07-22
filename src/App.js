import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home.jsx';
import { React } from 'react'
import Footer from './components/Footer/Footer.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import ScrollToTopButton from './components/Scroll/ScrollToTopButton .jsx';

function App() {
  return (
    <div>
        <NavBar></NavBar>
        <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/SignIn' element={<SignIn/>} /> 

        </Routes>
        <Footer></Footer>
        <ScrollToTopButton />
    </div>
  );
}

export default App;
