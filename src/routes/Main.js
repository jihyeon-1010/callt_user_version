import React from "react";
import logo from "img/logo.png";
import "routes/Main.css";
import axios from "axios";
import { Link } from 'react-router-dom';

function Main () {
  const handleCallButton = () => {
    
    navigator.geolocation.getCurrentPosition(
      position => {
        const interval = setInterval(() => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        sendUserLocation(latitude, longitude);
        console.log("위도:", latitude, "경도:", longitude);
      },2000);

      // // return () => {
      // //   clearInterval(interval);
      // // }
    },
      error => {
        console.error("위치 정보를 가져올 수 없습니다.", error);
      }
    );
  };

  // 사용자의 위치 정보를 서버러 전달하는 코드
  const sendUserLocation = (latitude, longitude) => {
    axios.post('http://192.168.137.175:3001/user-location/', { 
      params: {
        user_la: latitude, 
        user_lo: longitude,
   }
   })
      .then(response => {
        console.log('서버 응답: ', response.data);
      })
      .catch(error => {
        console.error('오류 발생: ', error);
      });
  };
  
    
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
            <button className="call" onClick={handleCallButton}>호출하기</button>
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