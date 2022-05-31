import { useState } from "react";
import { Route } from "wouter";
import "./App.css";
import BusStop from "./pages/BusStation";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header></Header>
      </div>
      <div className="content">
        <Route path="/" component={Home} />
        <Route path="/bus-stop/:id">{BusStop}</Route>
      </div>
    </div>
  );
}

export default App;
