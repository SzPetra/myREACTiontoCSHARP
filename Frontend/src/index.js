import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import CreateLink from "./createLinkPage/components/CreateLink";
import AdminPage from "./adminPage/components/AdminPage";
import App from "./App";
import WorkMotivationTestPage from "./testPage/workMotivationTest/components/WorkMotivationTestPage";
import ChairLampTestPage from "./testPage/chairLampTest/components/ChairLampTestPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/tests" element={<App />}>
          <Route index element={<AdminPage />} />
          <Route exact path="create-link" element={<CreateLink />} />
          <Route
            exact
            path="work-motivation-test"
            element={<WorkMotivationTestPage />}
          />
           <Route
            exact
            path="chair-lamp-test"
            element={<ChairLampTestPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
