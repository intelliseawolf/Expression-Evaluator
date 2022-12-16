import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Evaluator from "./pages/Evaluator";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evaluator" element={<Evaluator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
