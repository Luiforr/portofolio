import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portofolio from "./pages/Portofolio";
import Layout from "./components/layout/Layout";
import Porto from "./pages/Porto";
import NotFounds from "./pages/NotFounds";
import History from "./pages/History";
import KDA from "./pages/KDA";
import Biodata from "./pages/Biodata";
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Portofolio />}>
        </Route>
        <Route path="biodata" element={<Biodata />}></Route>
        <Route path="kda" element={<KDA />}></Route>
        <Route path="history" element={<History />}></Route>
          <Route path="portofolio" element={<Porto />}></Route>
          <Route path="*" element={<NotFounds
          />} />
      </Routes> 
    </>
  );
}

export default App;
