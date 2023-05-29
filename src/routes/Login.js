import React from "react";
import logo from "../img/logo.png";
import "./Login.css";

function Login (){
    return (
        <section className="login_contents">
            <div className="login_wrapper">
                {/* 로고 */}
                <div className="logo_img">
                    <img src={logo} className="mainLogo"/>
                </div>
                <h3>LOGIN</h3>
                
                {/* 폼 */}
                <form className="form">
                    {/* 이메일 또는 휴대전화 */}
                    <input type="text" className="email" aria-describedby="emailHelp" placeholder="Email or Phone" required />

                    {/* 비밀번호 */}
                        <input type="password" className="password" placeholder="Password" />

                    {/* 아이디 저장하기 */}
                    <div className="id_check">
                        <input type="checkbox" className="check" />
                        <label for="check_id"><span className="check_id_checkBox">Remember ID</span></label>
                    </div>
                    
                    {/* 로그인 버튼 */}
                    <input type="submit" className="login" value={"Log in"} />
                </form>

                
                <div className="direction_wrapper">
                    {/* 비밀번호 찾기 */}
                    <p className="forgot_pw"><a href="#">Forgot password?</a></p>
                    {/* 회원가입 */}
                    <p className="sign_up">Don't have an account yet? <a href="#">Sign up</a></p>
                </div>
            </div>
        </section>
    );
}

export default Login;