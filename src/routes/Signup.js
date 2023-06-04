import React from "react";
import "./Signup.css";
import logo from "../img/logo.png";

function Signup () {
    return (
        <section id="membership_contents">
            <div className="membership_wrapper">
               {/* 로고 */}
                {/* <div className="logo_img">
                    <img src={logo} className="mainLogo"/>
                </div> */}
                <form id="form" className="membership_form">
                    <h2>회원가입</h2>
                    {/* 사용자이름 */}
                    <div className="form-control">
                        <label for="">이름</label>
                        <input type="text" id="username" placeholder="이름을 입력해주세요" />
                    </div>
                    <div className="form-control">
                        <label for="">전화번호</label>
                        <input type="text" id="username" placeholder="휴대폰 번호 입력('-' 제외 11자리 입력)" />
                    </div>
                    {/* 이메일 */}
                    <div class="form-control form-controlEmail">
                        <label for="email">이메일</label>
                        <input type="email" id="email" placeholder="이메일 주소" /> @
                        {/* 도메인 스크롤 */}
                        <select className="domain">
                          <option value={"1"} selected>직접입력</option>
                          <option value={"1"} selected>naver.com</option>
                          <option value={"1"} selected>gmail.com</option>
                          <option value={"1"} selected>daum.net</option>
                          <option value={"1"} selected>nate.com</option>
                        </select>
                    </div>
                    {/* 비밀번호 */}
                    <div className="form-control">
                        <label for="password">비밀번호</label>
                        <input type="password" id="password" placeholder="숫자, 영문, 특수문자 조합 최소 8자" />
                        <input type="password" id="password2" placeholder="비밀번호 재입력" />
                    </div>

                    {/* 회원가입 버튼 */}
                    <button>가입하기</button>
                </form>
            </div>
        </section>
    );
}

export default Signup;