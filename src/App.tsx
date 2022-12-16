import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Calculate from "./pages/Calculate";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
