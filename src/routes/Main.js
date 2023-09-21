import React, { useState, useEffect } from "react";
import logo from "img/logo.png";
import "routes/Main.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import Call from "routes/Call";

function Main () {
  // const [userLocation, setUserLocation] = useState(null);

  // const getUserLocation = () => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       const { latitude, longitude } = position.coords;
  //       setUserLocation({ latitude, longitude });
  //       console.log(latitude, longitude)
  //     });
  //   } else {
  //     console.log("Geolocation is not available in this browser.");
  //   }
  //   };

  // useEffect(() => {
  //   // Fetch user's location when the component mounts
  //   getUserLocation();
  // }, []);


  return (
    <section id="main_contents">
      <div className='wrapper'>
        {/* 타이틀 */}
        <div className="title">
          <img src={logo} className="mainLogo"/>
          <p className="sub_title">콜티를 호출해보세요!</p>
        </div>

        {/* 인트로 */}
        <div className="intro">
          <div className="type">
            <ul className="type_list">
              <li>콜티를 호출해 쓰레기를 버려주세요.</li>
              <li>다양한 분리수거 퀴즈를 풀어보아요.</li>
              <li></li>
            </ul>
          </div>
        </div>

        {/* 호출하기 버튼 */}
        <div className="button1">
          <Link to="/call">
            <button className="call" >호출하기</button>
          </Link>
        </div>

        {/* 퀴즈풀기 버튼 */}
        <div className="button2">
          <Link to="/quizList">
            <button className="quiz">퀴즈풀기</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Main;