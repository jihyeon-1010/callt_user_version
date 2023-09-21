import React from "react";
import 'routes/Modal.css';
import { Link } from "react-router-dom";

function Modal(props){
    const closeModal = () => {
        if(props.isModal){
            return props.setIsModal(false);
        }
    };

    const content = props.info;
    const i = props.id;
    const answer = props.an;

    const handleAnswerClick = () => {
        if (answer === content[i - 1].answer) {
            props.setCount((prevCount) => prevCount + 1);
        }

        if (i < content.length) {
            // 다음 문제로 넘어가기
            props.setIsModal(false);
            props.setCurrentId(i + 1); // 다음 문제로 설정
        } else {
            // 마지막까지 문제를 풀었을 경우
            props.setQuizCompleted(true);
            props.setIsModal(false);
        }
        closeModal();
    }

    return(
        <div className="modal_bg">
            <div className="container">
                <div className="modalBody">
                    <div className="checkAnswer">
                        <span className="Answer">
                        {answer === content[i - 1].answer ? (<span className="right">{`정답`}</span>) : (<span className="wrong">{`오답`}</span>)} 입니다!
                        </span>
                    </div>
                    <div className="text">
                        <p>{content[i - 1].summary}</p>
                    </div>
                    <div className="button">
                        {i === 10 ? (
                            <button className="buttons" onClick={handleAnswerClick}>결과확인</button>
                        ) : (
                            <button className="buttons" onClick={handleAnswerClick}>계속하기</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;