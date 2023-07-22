import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (

    <div className="min-w-screen min-h-screen bg-richblack-900 flex justify-center items-center  ">
      <div className="container flex flex-col  w-[1170px]">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </div>
    </div>


  )
}

export default App;
