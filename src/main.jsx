import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./component/home.jsx";
import Restaurent from "./component/Restaurent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurentMenu from "./component/RestaurentMenu.jsx";
import SearchFood from "./component/SearchFood.jsx";

import SecondryHome from "./component/SecondryHome.jsx";

import { store } from "../Stores/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route element={<SecondryHome></SecondryHome>}>
            <Route
              path="/restaurants"
              element={<Restaurent></Restaurent>}
            ></Route>
            <Route
              path="/city/mumbai/:id"
              element={<RestaurentMenu></RestaurentMenu>}
            ></Route>
            <Route
              path="/city/mumbai/:id/search"
              element={<SearchFood></SearchFood>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
