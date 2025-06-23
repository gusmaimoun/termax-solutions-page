import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./ui/Layout";
import Home from "./pages/Home";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
