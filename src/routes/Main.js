import React from "react";
import logo from "../img/logo.png";
import "./Main.css";

function Main () {
  return (
    <section id="main_contents">
      <div className='wrapper'>
        {/* 타이틀 */}
        <div className="title">
          <img src={logo} className="mainLogo"/>
          <p className="sub_title">콜티를 호출해보세요!</p>
        </div>

        {/* 인트로 */}
        <div class="intro">
          <div class="type">
            <ul class="type_list">
              <li>콜티를 호출해 쓰레기를 버려주세요.</li>
              <li>다양한 분리수거 퀴즈를 풀어보아요.</li>
              <li></li>
            </ul>
          </div>
        </div>

        {/* 호출하기 버튼 */}
        <div className="button1">
          <a href="/call">
            <button className="call"
            >호출하기</button>
          </a>
        </div>

        {/* 퀴즈풀기 버튼 */}
        <div className="button2">
          <a href="/quiz">
            <button className="quiz">퀴즈풀기</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;