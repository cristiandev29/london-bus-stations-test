import { useState } from "react";
import { Route } from "wouter";
import "./App.css";
import BusStop from "./pages/BusStop";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
  const [appId, setAppId] = useState(import.meta.env.VITE_APP_ID_TFL);
  console.log(import.meta.env.VITE_APP_ID_TFL);
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
