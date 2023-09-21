import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "routes/Main";
import Quiz from "routes/Quiz";
import Call from "routes/Call";
import QuizResult from "routes/QuizResult";
import Calling from "routes/Calling";
import Quiz_list from "routes/Quiz_list";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/quiz/:level" element={<Quiz/>}/>
        <Route exact path="/call" element={<Call/>}/>
        <Route exact path="/quizResult" element={<QuizResult/>}/>
        <Route exact path="/calling" element={<Calling />} />
        <Route exact path="/quizList" element={<Quiz_list />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;