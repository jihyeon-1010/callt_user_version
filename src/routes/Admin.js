import React from "react";
import "./Admin.css";

function Admin() {
    return (
        <div className="admin_contents">
            <div className="trash">

            </div>
            <div className="modelName">
                모델명 : Call Me Trash To Treasure
            </div>
            <div className="trashSize">
                쓰레기 양 : 많음
            </div>
            <a href="/location"><button className="locationCheck">
                위치 확인
            </button>
            </a>
        </div>
    );
}

export default Admin;