import React,{useState,useEffect} from "react";
import Main from "./components/Main";
import './App.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from "./components/Login";


function App() {
  
 

    return (
      <div>
        {/* <Main/> */}
        <Router>
          <Routes>
            
          <Route path="/main" element={<Main />} />
          <Route path="/" element={< Login/>} />

          </Routes>

        </Router> 
        
      
      </div>
    )


   }




export default App;
