import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Offer from "./components/Offer";
import About from "./components/About";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
//Imported all navbar pages here
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Login />
      <Features />
      <Offer />
      <About />
      <ContactUs />
      <Error />
    </div>
  );
}

export default App;
