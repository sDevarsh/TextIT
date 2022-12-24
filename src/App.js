
import './App.css';
import About from './modules/About';
import NavBar from './modules/NavBar'
import TextForm from './modules/TextForm';

import React, { useState } from 'react';
import {
  BrowserRouter ,
  Route,
  Routes,

} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light')
  const togglebutton = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "grey"
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
    
    <BrowserRouter>
    <NavBar title='devarshs ' mode={mode} togglebutton={togglebutton} />
     <div className="container my-3" >
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} heading='Enter text '/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
