import React from "react";
import Main from "./routes/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./routes/Quiz";
import Call from "./routes/Call";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import Forgot_pw from "./routes/forgot_pw";
import Signup from "./routes/Signup";
import Location  from "./routes/Location";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/call" element={<Call/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="/forgot_pw" element={<Forgot_pw />}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;