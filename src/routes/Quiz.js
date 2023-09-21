import React, { useEffect, useState } from "react";
import "routes/Quiz.css";
import Modal from "routes/Modal";
import QuizResult from "routes/QuizResult";
import { Link, useParams } from "react-router-dom";

function Quiz() {
    {/* 문제번호 */ }
    const { level } = useParams();  // 파라미터에서 level 값을 읽어옴
    const [currentId, setCurrentId] = useState(1);
    const [isModal, setIsModal] = useState(false);
    const [answer, setAnswer] = useState("");
    const [count, setCount] = useState(0);  // 점수를 나타낼 상태변수 
    const [quizCompleted, setQuizCompleted] = useState(false);  // 퀴즈를 다 풀었는지 여부를 나타내는 상태변수
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        const getQuizDataByLevel = (level) => {
            switch (level) {
                case '1':
                    return quizs1;
                case '2':
                    return quizs2;
                case '3':
                    return quizs3;
                case '4':
                    return quizs4;
                case '5':
                    return quizs5;
                default:
                    return [];
            }
        };

        const data = getQuizDataByLevel(level);
        setQuizData(data);
    }, [level]);
   
    const quizs1 = [
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
            quiz: "10. 다 먹은 컵라면 용기는 물에 씻어 스티로폼으로 배출한다.",
            answer: "X",
            summary: "스티로폼 재활용은 흰색만 가능합니다. 다 먹은 컵라면 용기를 물로만 세척한다면 라면국물이 다 빠지지 않기 때문에 재활용이 불가능해 일반쓰레기로 배출해야 합니다. 붉은 물이 들지 않은 컵라면 용기라면 재활용이 가능합니다. ",
        },
    ];

    const quizs2 = [
        {
            id: 1,
            quiz: "1. 금속캔 분리 배출 시 플라스틱 뚜껑 등 다른 재질은 제거한 후 배출해야 한다.",
            answer: "O",
            summary: "금속캔과 다른 재질인 뚜껑과 라벨 등은 제거 후 배출해야 합니다.",
        },
        {
            id: 2,
            quiz: "2. 투명 페트병은 라벨을 제거하고 압착한 후 소재가 다른 뚜껑과 분리 배출해야 한다.",
            answer: "X",
            summary: "투명 페트병은 내용물을 깨끗이 비우고 부착상표 등을 제거한 후 가능한 압착해 뚜껑을 닫아 배출해야 합니다.",
        },
        {
            id: 3,
            quiz: "3. 금속 스프링이 있는 펌프형 플라스팅 용기(샴푸, 주방세제 등)는 스프링을 제거한 후 플라스틱으로 분리배출해야 한다.",
            answer: "O",
            summary: "플라스틱과 재질이 다른 스프링은 제거 후 분리배출해야 합니다.",
        },
        {
            id: 4,
            quiz: "4. 깨진 유리병도 재활용이 가능하다.",
            answer: "X",
            summary: "깨진 유리제품은 신문지 등에 싸서 종량제 봉투에 배출해야 합니다.",
        },
        {
            id: 5,
            quiz: "5. 음료를 담아 사용한 종이컵은 재활용이 불가능하므로 종량제 봉투에 버려야한다.",
            answer: "X",
            summary: "종이컵은 내용물을 비우고 물로 헹군 후 압착하여 봉투에 넣거나 한데 묶어서 배출합니다.",
        },
        {
            id: 6,
            quiz: "6. 물로 내부를 씻을 수 없는 치약 용기는 재활용이 불가능하다.",
            answer: "X",
            summary: "물로 헹굴 수 없는 치약용기 등 플라스틱 용기루는 내용물을 비운 후 배출합니다.",
        },
        {
            id: 7,
            quiz: "7. CD나 DVD는 개인정보보호를 위해 물리적으로 파쇄한 후 플라스틱으로 분리 배출해야 한다.",
            answer: "X",
            summary: "플라스틱 이외의 재질이 부착된 완구·문구류, 옷걸이, 칫솔, 파일철, 전화기, 낚시대, 유모차, CD·DVD 등은 종량제 봉투, 특수규격마대 또는 대형폐기물 처리 등 지자체 조례에 따라 배출합니다."
        },
        {
            id: 8,
            quiz: "8. 음식을 포장한 비닐랩의 경우 이물질을 제거해도 재활용이 불가능하다.",
            answer: "X",
            summary: "깨끗한 랩 필름류는 분리배출할 수 있으며, 깨끗하게 이물질 제거가 되지 않은 랩필름, 식탁보, 고무장갑, 장판 등은 종량제 봉투, 특수 규격 마대 등 지자체 조례에 따라 배출해야 합니다.",
        },
        {
            id: 9,
            quiz: "9. TV 등 전자제품 구입 시 완충재로 사용한 발포합성수지(스티로폼) 포장재는 가급적 구입처로 반납해야 한다.",
            answer: "O",
            summary: "발포합성수지 포장재는 가급적 구입처로 반납하는 것이 좋습니다.",
        },
        {
            id: 10,
            quiz: "10. 과일 포장 시 완충용으로 사용한 일명 '꽃받침'은 재활용이 불가능하므로 종량제 봉투에 버려야 한다.",
            answer: "O",
            summary: "과일 포장 등에 사용된 '꽃받침'은 따로 재활용이 불가능하므로 종량제 봉투에 배출해야 합니다. ",
        },
    ];

    const quizs3 = [
        {
            id: 1,
            quiz: "1. 스프링 노트나 달력은 쇠 부분을 제거한 뒤 폐지로 분리 배출해야 한다.",
            answer: "O",
            summary: "노트나 달력 등 스프링이 달려있으면 제거 후 분리 배출해야 합니다.",
        },
        {
            id: 2,
            quiz: "2. 종이팩 전용 수거함이 없는 경우에 우유와 같은 종이팩은 종이류 폐기물과 섞어 배출할 수 있다.",
            answer: "X",
            summary: "종이팩 전용 수거함이 없는 경우 종이류와 구분할 수 있도록 가급적 끈으로 묶어 종이류 수거함으로 배출합니다.",
        },
        {
            id: 3,
            quiz: "3. 종이박스에 다른 종이 폐기물을 담아 배출하는 것이 효율적이다.",
            answer: "X",
            summary: "골판지 상자(박스)는 비닐코팅 부분 상자에 붙어있는 테이프, 철핀, 알루미늄박 등을 제거하고 접어서 배출합니다.",
        },
        {
            id: 4,
            quiz: "4. 신문지 폐기물 배출 시 코팅된 광고지, 비닐, 오물류 등은 섞이지 않도록 해야한다.",
            answer: "O",
            summary: "신문지를 버릴 때는 오물류 등이 섞이지 않도록 배출해야 합니다.",
        },
        {
            id: 5,
            quiz: "5. 김장에 사용한 대형 비닐은 폐비닐로 분리 배출해야 한다.",
            answer: "X",
            summary: "이물질이 묻은 비닐은 합성수지 비닐류로 수거하지 않으므로 종량제에 배출해야 합니다. ",
        },
        {
            id: 6,
            quiz: "6. 알루미늄 포일은 재활용이 불가능하다.",
            answer: "O",
            summary: "알루미늄 재질 포일은 재활용이 불가능합니다. ",
        },
        {
            id: 7,
            quiz: "7. 택배용 보냉 상자류 중에 내부 알루미늄박, 비닐 등이 분리가 되지 않은 상자의 경우에는 재활용이 불가능하다",
            answer: "O",
            summary: "내부 알루미늄박, 비닐 등이 분리되지 않은 보냉 상자류는 재활용이 불가능합니다.",
        },
        {
            id: 8,
            quiz: "8. 세탁소에서 제공하는 옷걸이는 고철류로 배출할 수 없다.",
            answer: "X",
            summary: "세탁소에서 제공하는 일회용 옷걸이는 고철류로 분리 배출해야 합니다.",
        },
        {
            id: 9,
            quiz: "9. 전단지는 종이로 분리숵해야 한다.",
            answer: "X",
            summary: "전단지는 종이 위에 코팅이 되어 있기 때문에 일반쓰레기로 배출해야 합니다.",
        },
        {
            id: 10,
            quiz: "10. 음식물 중 동물의 뼈는 무조건 일반쓰레기로 배출해야 한다.",
            answer: "X",
            summary: "뼈 주위에 살코기가 많이 남아있는 경우는 음식물 쓰레기로 배출이 가능합니다. 하지만 지자체별로 기준이 다르기 때문에 배추랗기 전 확인이 필요합니다. ",
        },
    ];

    const quizs4 = [
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
            quiz: "10. 다 먹은 컵라면 용기는 물에 씻어 스티로폼으로 배출한다.",
            answer: "X",
            summary: "스티로폼 재활용은 흰색만 가능합니다. 다 먹은 컵라면 용기를 물로만 세척한다면 라면국물이 다 빠지지 않기 때문에 재활용이 불가능해 일반쓰레기로 배출해야 합니다. 붉은 물이 들지 않은 컵라면 용기라면 재활용이 가능합니다. ",
        },
    ];

    const quizs5 = [
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
            quiz: "10. 다 먹은 컵라면 용기는 물에 씻어 스티로폼으로 배출한다.",
            answer: "X",
            summary: "스티로폼 재활용은 흰색만 가능합니다. 다 먹은 컵라면 용기를 물로만 세척한다면 라면국물이 다 빠지지 않기 때문에 재활용이 불가능해 일반쓰레기로 배출해야 합니다. 붉은 물이 들지 않은 컵라면 용기라면 재활용이 가능합니다. ",
        },
    ];

    {/* O 버튼을 클릭했을 때 모달창 */ }
    const AnswerO = () => {
        setIsModal(!isModal);
        setAnswer("O");
    }

    {/* X 버튼을 클릭했을 때 모달창 */ }
    const AnswerX = () => {
        setIsModal(!isModal);
        setAnswer("X");
    }

    const restartQuiz = () => {
        setCount(0); // count 상태를 0으로 초기화
        setCurrentId(1); // 퀴즈를 첫 번째 문제부터 다시 시작
        setQuizCompleted(false); // 퀴즈를 다시 시작하면 다 풀지 않은 상태로 변경
        setIsModal(false); // 결과 모달을 닫습니다.
    };

    const calculateProgress = () => {  // 진행률에 따른 프로그래스바
        if (quizData.length === 0) return 0;
        return (currentId / quizData.length) * 100;
    };
   
    return (
        <section id="quiz_contents">
            {/* 프로그래스바 */}
            <div className = "progress_container">
                <div className="progressbar">
                    <div className="progress" style={{ width: `${calculateProgress()}%` }}></div>
                </div>
            </div>
            
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
                    {quizData[currentId-1]?.quiz}
                </div>

                <div className="contents_wrapper">
                    <div className="button_wrapper">
                        {/* O 버튼 */}
                        <div className="quiz_button1">
                            <button className="O" onClick={AnswerO} disabled={quizCompleted}>O</button>
                        </div>
                        {/* X 버튼 */}
                        <div className="quiz_button2">
                            <button className="X" onClick={AnswerX} disabled={quizCompleted}>X</button>
                        </div>
                    </div>
                </div>
            </div>

            {isModal === true ? (
                <>
                <Modal 
                    isModal={isModal} 
                    info={quizData} 
                    setIsModal={setIsModal} 
                    id={currentId} 
                    an={answer}
                    setCount={setCount}
                    setCurrentId={setCurrentId}
                    quizCompleted={quizCompleted}
                    setQuizCompleted={setQuizCompleted}
                />
                </>
                ) : null}

            {currentId === quizData.length && !isModal && quizCompleted && (
                <div className="result"> 
                        <QuizResult count={count} restartQuiz={restartQuiz} />
                </div>
            )}
        </section>    
    );
}

export default Quiz;