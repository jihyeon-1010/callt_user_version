import React from "react";
import Main from "./routes/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./routes/Quiz";
import Call from "./routes/Call";
import Login from "./routes/Login";
import Admin from "./routes/Admin";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/call" element={<Call/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;