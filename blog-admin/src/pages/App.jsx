import * as React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import AdminIndex from "./AdminIndex";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" exact element={<Login />} />
        <Route path="/index/" element={<AdminIndex />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
