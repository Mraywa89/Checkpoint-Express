import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/homepage';
import Servicepage from './pages/servicepage';
import Contactpage from './pages/contactpage';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [working, setworking] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((res) => setworking(true))
      .catch((err) => setworking(false));
  });

  return (
    <>
  {working === true ? (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Homepage/>} />
       <Route path="/service" element={<Servicepage/>} />
       <Route path="/contact" element={<Contactpage/>} />
     </Routes>
    </BrowserRouter>
  ) : (
    <></>
  )}
  </>
  );
}

export default App;
