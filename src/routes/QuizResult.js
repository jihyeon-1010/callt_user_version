import React from 'react'
import 'routes/QuizResult.css';
import { Link } from 'react-router-dom';

function QuizResult({ count, restartQuiz }) {
  return (
    <div>
      <h2>퀴즈를 전부 완료했습니다!</h2>
      <p>맞힌 개수 : { count } 개</p>
      <div><button className='buttons' onClick={ restartQuiz }>다시하기</button></div>
      <Link to='/'><div><button className='buttons'>메인페이지로</button></div></Link>
    </div>
  )
}

export default QuizResult

