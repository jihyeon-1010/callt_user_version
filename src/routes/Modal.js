import React from "react";
import './Modal.css';

function Modal(props){
    const closeModal = () => {
        if(props.isModal){
            return props.setIsModal(false);
        }
    };

    const content = props.info;
    const i = props.id;
    const answer = props.an;

    return(
        <div className="container">
            <div className="modalBody">
                <div className="checkAnswer">
                    <span className="Answer">
                    {answer == content[i - 1].answer ? (<span className="right">{`정답`}</span>) : (<span className="wrong">{`오답`}</span>)} 입니다!
                    </span>
                </div>
                <div className="text">
                    {content[i - 1].summary}
                    <div>
                        <button className="buttons" onClick={closeModal}>계속하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;