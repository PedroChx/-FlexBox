import { socketInit } from "./js/socket.js"
import './App.css';
import { useState, useEffect } from "react";


function App() {

  const socket = socketInit

  return (
    <div className="App">
      <p>Hola mundo</p>
    </div>
  );
}

export default App;
