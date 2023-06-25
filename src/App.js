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
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/quiz" element={<Quiz/>}/>
        <Route exact path="/call" element={<Call/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/admin" element={<Admin/>}/>
        <Route exact path="signup" element={<Signup/>}/>
        <Route exact path="/forgot_pw" element={<Forgot_pw />}/>
        <Route exact path="/location" element={<Location/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;