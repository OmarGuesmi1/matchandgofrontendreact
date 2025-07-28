import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home.jsx';
import {  useState } from 'react'
import Footer from './components/Footer/Footer.jsx';
import ScrollToTopButton from './components/Scroll/ScrollToTopButton .jsx';
import FindJob from './pages/FindJob/FindJob.jsx';
import JobDetails from './pages/JobDetails/JobDetails.jsx';

function App() {
    const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div>
      <NavBar showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
        <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/FindJob' element={<FindJob/>} /> 
        <Route path="/FindJob/:id" element={<JobDetails />} />



        </Routes>
        <Footer></Footer>
      <ScrollToTopButton disabled={showSignIn} />
    </div>
  );
}

export default App;
