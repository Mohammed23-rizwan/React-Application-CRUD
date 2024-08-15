// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/home";
import Add from "./components/add";
import Update from "./components/update";
import "./components/styling.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
