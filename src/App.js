import React from "react";
import Main from "./routes/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./routes/Quiz";
import Call from "./routes/Call";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/call" element={<Call/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;