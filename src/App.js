import {useState,useEffect} from 'react'
import axios from 'axios';
import {Card,Button,Container,Row,Col,ListGroup,Badge,Alert,Form} from 'react-bootstrap'
import 'react-image-lightbox/style.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
function App() {

  return (
   <>

<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>



    
    
   </>
  );
}

export default App;
