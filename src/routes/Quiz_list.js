import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "routes/Quiz_list.css";
import logo from "img/logo.png";

function Quiz_list() {
  return (
    <section id="quizList_contents">
      <img src={logo} className="mainLogo"/>
      <h2 className='quiz_title'><b>분리수거 퀴즈</b></h2>
      <button className='lv1'>
        <Link to='/quiz/1' style={{ textDecoration: 'none', display: 'block' }}>
          <p>1단계</p>
        </Link>
      </button>
      <button className='lv2'>
        <Link to='/quiz/2' style={{ textDecoration: 'none', display: 'block' }}>
          <p>2단계</p>
        </Link>
      </button>
      <button className='lv3'>
        <Link to='/quiz/3' style={{ textDecoration: 'none', display: 'block' }}>
          <p>3단계</p>
        </Link>
      </button>
      <button className='lv4'>
        <Link to='/quiz/4' style={{ textDecoration: 'none', display: 'block' }}>
          <p>4단계</p>
        </Link>
      </button>
      <button className='lv5'>
        <Link to='/quiz/5' style={{ textDecoration: 'none', display: 'block' }}>
          <p>5단계</p>
        </Link>
      </button>
    </section>
  )
}
 
export default Quiz_list
