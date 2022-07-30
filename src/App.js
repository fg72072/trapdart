import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./screens/Home";
import Voting from "./screens/Voting";
import Community from "./screens/Community";
import { useEagerConnect, useInactiveListener } from './hooks/useEagerConnect';
function App() {
  
  const [errorMessage, setErrorMessage] = useState();
  useEagerConnect(setErrorMessage);
  useInactiveListener();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
