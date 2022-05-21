import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DarkModeSwitch from "./components/DarkModeSwitch";
import { DetailPage } from "./pages/DetailPage";
import Providers from "./providers/Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Providers>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:contentId" element={<DetailPage />} />
        </Routes>
        <DarkModeSwitch />
      </BrowserRouter>
    </React.StrictMode>
  </Providers>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
