import React from "react";
import "./Admin.css";

function Admin() {
    return (
        <div>
            <iframe className="w-full h-[320px] md:h-[432px]" src="https://maps.google.com/maps?q=%EA%B4%91%ED%99%94%EB%AC%B8&t=&z=17&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" allowfullscreen></iframe>
            <button className="call">호출하기</button>
        </div>
    );
}

export default Admin;