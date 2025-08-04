import React from "react";
import Header from "./Header";
import Netstan from "./Netstan";
import "./Netstan.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div style={{ paddingTop: "70px" }}>
        <Netstan />
      </div>
    </div>
  );
}

export default App;
