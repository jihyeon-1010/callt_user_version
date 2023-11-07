import React from 'react'
import 'routes/QuizResult.css';
import { Link } from 'react-router-dom';

function QuizResult( {count, restartQuiz} ) {
  return (
    <div class="quizresult__background">
    <div class="quizresult__box">
      <h2>퀴즈를 전부 완료했습니다!</h2>
      <p>맞힌 개수 : { count } 개</p>
      <div><button className='buttons_2' onClick={ restartQuiz }>다시하기</button></div>
      <Link to='/' style={{ textDecoration: 'none' }}><div><button className='buttons_2'>메인페이지로</button></div></Link>
    </div>
    </div>
  )
}

export default QuizResult

