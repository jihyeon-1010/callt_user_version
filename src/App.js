import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "routes/Main";
import Quiz from "routes/Quiz";
import Call from "routes/Call";
import QuizResult from "routes/QuizResult"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/quiz" element={<Quiz/>}/>
        <Route exact path="/call" element={<Call/>}/>
        <Route exact path="/quizResult" element={<QuizResult/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;