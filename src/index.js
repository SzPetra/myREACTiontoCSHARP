import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import CreateLink from "./createLinkPage/components/CreateLink";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/tests" element={<App />}>
          <Route exact path="/create-link" element={<CreateLink />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
