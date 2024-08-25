import React from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <span style={{ fontSize: "14px", color: "#4a4a4a" }}>Home / </span>{" "}
          Dashboard V2{" "}
        </h1>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
