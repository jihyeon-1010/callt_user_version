import React, { Component } from "react";
import "./forgot_pw.css";
// import axios from 'axios';

const forgot_pw = () => {
  return <div className='Search_div'>
  <h3> 비밀번호 찾기 </h3>
  <div>  
    <h5> 이름 </h5>
    <input type='text' maxLength='15' name='search_id_name'/>
  </div>

  <div>  
    <h5> 생년월일 </h5>
    <input type='text' maxLength='6' name='search_id_birthday'/> 

  </div>

  <div>  
    <h5> 이메일 </h5>
    <input type='text' maxLength='20' name='search_id_email'/> @ <input type='text' maxLength='15' name='search_id_write_email'/>


  </div>

  <div>
    <input type='button' value='조회하기' name='search_id_submit'/>
  </div></div>;


};
// class navigateToPurchase extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             result : false,
//         }
//     }

//     _searchUserID = async function() {
//         const user_name = document.getElementsByName('search_id_name')[0].value.trim();
//         const user_birthday = Number(document.getElementsByName('search_id_birthday')[0].value.trim());
//         const user_sex = Number(document.getElementsByName('search_id_sex')[0].value.trim());

//         const email_id = document.getElementsByName('search_id_email')[0].value.trim();
//         const email_host = document.getElementsByName('search_id_write_email')[0].value.trim();

//         const user_email = email_id + '@' + email_host;

//         // 이메일 체크
//         const email_check = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

//         if(user_name === "" || user_name.length < 1) {
//           return alert('이름을 작성해주세요.');

//         } else if(user_name.length < 2) {
//           return alert('이름은 최소 2글자 이상이여야 합니다.');
//         }

//         if(user_birthday === 0 || user_sex === 0) {
//           return alert('생년월일을 모두 입력해주세요.');

//         } else if(isNaN(user_birthday) || isNaN(user_sex)) {
//           return alert('생년월일은 숫자만 입력해주세요.');
//         }

//         if(email_id === "" || email_host === "") {
//           return alert('이메일을 모두 입력해주세요.');

//         } else if(!user_email.match(email_check)) {
//           return alert('올바른 이메일 형식을 입력해주세요.');
//         }
//         const obj = { 
//             user_name : user_name,
//             user_birthday : user_birthday,
//             user_sex : user_sex,
//             user_email : user_email
//       }

//       const res = await axios('/search/id', {
//             method : 'POST',
//             data : obj,
//             headers: new Headers()
//       })
//       if(res.data.length === 0) {
//         return alert('일치하는 데이터가 없습니다 \n다시 확인해주세요.');
//      }
//      this.setState({ result : res.data })
//       }


// } 




export default forgot_pw;