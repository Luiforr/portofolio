import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Head from "./components/Head.jsx";
import Footer from "./components/navigasi/Footer.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Head />
        <App />
        <Footer/>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);
