import React from "react";
import "./Location.css";

function Admin() {
    return (
        <div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.847066943343!2d127.04731227583486!3d37.55866677204067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4a55b2f2d93%3A0xffdfb5c8c57860f5!2z7ZWc7JaR7Jes7J6Q64yA7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1685868324130!5m2!1sko!2skr" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            <div className="logoutWrapper"><button className="logout">로그아웃</button></div>
        </div>
    );
}

export default Admin;