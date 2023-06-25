import React, { useState } from "react";
import "./Quiz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";


function Quiz () {
    {/* 문제번호 */}
    const [currentId, setCurrentId] = useState(1);

    const [isModal, setIsModal] = useState(false);

    const [answer, setAnswer] = useState("");

    {/* O 버튼을 클릭했을 때 모달창 */}
    const AnswerO = () => {
        setIsModal(!isModal);
        
        setAnswer("O");
    }

    {/* X 버튼을 클릭했을 때 모달창 */}
    const AnswerX = () => {
        setIsModal(!isModal);

        setAnswer("X");
    }

    {/* 이전 버튼 누르면 */}
    const add = () => {
        setCurrentId(currentId + 1); 
        if(currentId == 10) {
            setCurrentId(10);
        }
    }

    {/* 다음 버튼 누르면 */}
    const sub = () => {
        setCurrentId(currentId - 1);
        if(currentId == 1) {
            setCurrentId(1);
        }
   }
   
    return (
        
        <section id="quiz_contents">
            <div className="title">
                <h1>OX퀴즈</h1>
                {/* 문제번호 */}
                <div className="quiz_num">
                    {currentId}/10
                </div>
            </div>

            <div className="wrapper">
                {/* 퀴즈내용 */}
                <div className="quiz">
                    {quizs[currentId-1].quiz}
                </div>

                <div className="contents_wrapper">
                    <div className="button_wrapper">
                        {/* O 버튼 */}
                        <div className="quiz_button1">
                                <button className="O" onClick={AnswerO}>O</button>
                        </div>
                        {/* X 버튼 */}
                        <div className="quiz_button2">
                                <button className="X" onClick={AnswerX}>X</button>
                        </div>
                    </div>
                </div>

                <div className="contents_wrapper2">
                    <div className="button_wrapper down_wrapper">
                        {/* 이전 버튼 */}
                        <div className="prev_button">
                            <button className="prev_button"
                            onClick={sub}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                                이전
                            </button>
                        </div>
                        {/* 다음 버튼 */}
                        <div className="next_button">
                            <button className="next_button"
                            onClick={add}>
                                다음
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            {isModal === true ? (
                <>
                <Modal 
                    isModal={isModal} 
                    info={quizs} 
                    setIsModal={setIsModal} 
                    id={currentId} 
                    an={answer}/>
                </>
                ) : null}
        </section>
    );
}

const quizs = [
    {
        id: 1,
        quiz: "1. 패스트푸드 음료컵의 뚜껑과 빨대는 모두 플라스틱에 포함된다.",
        answer: "X",
        summary: "뚜껑은 플라스틱, 빨대는 일반 쓰레기로 분리배출해야 합니다.",
    },
    {
        id: 2,
        quiz: "2. 고추장, 간장, 쌈장 등 장류는 음식물 쓰레기다.",
        answer: "X",
        summary: "염분이 많은 장류는 음식물 쓰레기에 포함되지 않습니다.",
    },
    {
        id: 3,
        quiz: "3. 칫솔은 일반 쓰레기로 버려야 한다.",
        answer: "O",
        summary: "칫솔은 플라스틱류가 아닌 일반 쓰레기로 분류해야 합니다.",
    },
    {
        id: 4,
        quiz: "4. 달걀 껍데기는 일반 쓰레기이다.",
        answer: "O",
        summary: "조개껍데기, 닭뼈 등 동물이 먹지 못하는 것은 일반쓰레기로 분류합니다.",
    },
    {
        id: 5,
        quiz: "5. 깨진 유리병은 잘 감싸 유리로 분리수거 한다.",
        answer: "X",
        summary: "깨진 유리병은 신문지로 감싸 일반 쓰레기로 배출합니다. ",
    },
    {
        id: 6,
        quiz: "6. 영수증은 종이로 분리수거 한다.",
        answer: "X",
        summary: "한 면만 코팅되어 있는 일반적인 영수증은 일반쓰레기로 구분되고, 양면이 코팅되어 있는 영수증은 비닐로 구분됩니다. ",
    },
    {
        id: 7,
        quiz: "7. 배달음식, 아이스크림 등을 먹을 때 쓰이는 일회용 수저, 포크는 플라스틱 재활용이 가능하다.",
        answer: "X",
        summary: "작은 플라스틱은 재질구분이 어렵고, 너무 작아 선별 기계에 끼이게 되면 분류가 힘들어집니다.",
    },
    {
        id: 8,
        quiz: "8. 감자칩 통은 일반쓰레기로 배출해야 한다.",
        answer: "O",
        summary: "감자칩 통은 부위별로 다른 재질로 구성되어 있어 일반쓰레기로 배출해야 합니다.",
    },
    {
        id: 9,
        quiz: "9. 생수병을 분리할 때는 상표라벨을 따로 제거하지 않고 버려도 된다.",
        answer: "X",
        summary: "생수병의 라벨은 제거한 후 비닐류로 분류하고, 페트병은 플라스틱으로 분류합니다.",
    },
    {
        id: 10,
        quiz: "10. 다 먹은 컵라면 용기는 물에 씻어 스티로폼으로 배출한다",
        answer: "X",
        summary: "스티로폼 재활용은 흰색만 가능합니다. 다 먹은 컵라면 용기를 물로만 세척한다면 라면국물이 다 빠지지 않기 때문에 재활용이 불가능해 일반쓰레기로 배출해야 합니다. 붉은 물이 들지 않은 컵라면 용기라면 재활용이 가능합니다. ",
    },

];

export default Quiz;