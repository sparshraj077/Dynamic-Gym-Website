import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSessions from './components/WorkoutSessions';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import BMICalculator from "./components/BMICalculator.jsx";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <WorkoutSessions/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <BMICalculator/>
      <Footer/>
    <ToastContainer theme='dark' posittion='top-center'/>

    </Router>
  )
}
export default App