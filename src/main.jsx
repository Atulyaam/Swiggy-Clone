import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./component/home.jsx";
import Restaurent from "./component/Restaurent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurentMenu from "./component/RestaurentMenu.jsx";
import SearchFood from "./component/SearchFood.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/restaurants" element={<Restaurent></Restaurent>}></Route>
        <Route
          path="/city/mumbai/:id"
          element={<RestaurentMenu></RestaurentMenu>}
        ></Route>
        <Route
          path="/city/mumbai/:id/search"
          element={<SearchFood></SearchFood>}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
