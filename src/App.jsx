import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-full md:w-11/12 mx-auto">
      <Navbar></Navbar>
      <h1 className="text-2xl">Vite + React</h1>
    </div>
  );
}

export default App;
