import { useState } from "react";
import { Route, Link } from "wouter";
import "./App.css";
import BusStop from "./pages/BusStop";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Link href="/" className="active">
        Home
      </Link>
      <Link href="/bus-stop/1" className="active">
        BusStop
      </Link>
      ;
      <Route path="/" component={Home} />
      <Route path="/bus-stop/:id">{BusStop}</Route>
    </div>
  );
}

export default App;
