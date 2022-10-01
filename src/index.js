import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import CreateLink from "./createLinkPage/components/CreateLink";
import AdminPage from "./adminPage/AdminPage";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/tests" element={<App />}>
          <Route index element={<AdminPage />} />
          <Route exact path="create-link" element={<CreateLink />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
