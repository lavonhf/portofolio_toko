import React from "react";
import "./App.css";
import "./component/componen.css"
import Home from "./pages/index";
import About from "./pages/about";
import Menu from "./pages/menu";
import Order from "./component/order";

import { data } from "./component/data";
import NavBar from "./component/navbar/navbar";
import { Routes, Route } from "react-router-dom";

function App() {

  const dataItem = data;
  return (
    <>
      <NavBar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu dataItem={dataItem}/>} />
        <Route path="order" element={<Order dataItem={dataItem}/>} />
      </Routes>
    </>
  );
}

export default App;
