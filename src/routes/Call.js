import React from "react";

function Call() {
    return(
        <div>
        <div className="call">
            <b>콜티를 호출하고 있습니다.</b>
            <p>잠시만 기다려주세요~</p>
        </div>
        <iframe className="w-full h-[320px] md:h-[432px]" src="https://maps.google.com/maps?q=%EA%B4%91%ED%99%94%EB%AC%B8&t=&z=17&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" allowfullscreen></iframe>
    <button className="call">호출하기</button>
    </div>
    );
}

export default Call;