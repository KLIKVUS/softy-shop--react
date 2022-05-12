import React from 'react';
import { NavLink } from 'react-router-dom';


function NotFound() {
    return (
        <main>
            <h1 style={{textAlign: "center"}}>404 NotFound</h1>
            <p style={{textAlign: "center"}}>Я не нашел такую страницу.</p>
            <NavLink to={"/"} style={{display: "block", textAlign: "center", textDecoration: "underline"}}>Вернуться на главную</NavLink>
            <video width="100%" height="200" autoPlay muted loop>
                <source src="https://chpic.su/_data/stickers/f/FluentEmoji2/FluentEmoji2_001.webm" type="video/webm"/>
            </video>
        </main>
    );
}

export default NotFound;