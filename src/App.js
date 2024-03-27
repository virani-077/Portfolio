import React from "react";
// import Background from "./images/production_id_5091624 (1080p).mp4";
// import Logo from "./images/sankettt.png";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contect from "./routes/Contect";
import Service from "./routes/Service";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/service" Component={Service} />
        <Route path="/contect" Component={Contect} />
        <Route path="/footer" Component={Footer}/>
      </Routes>
    </>
  );
};

export default App;
