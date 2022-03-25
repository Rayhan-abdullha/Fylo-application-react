import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Notfound from './components/Notfound/Notfond';
import Home from './pages/HomePage/Home';
// import your route components too

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route exact path="/home" element={<Home />}/>
      <Route path="*" element={<Notfound />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App;
