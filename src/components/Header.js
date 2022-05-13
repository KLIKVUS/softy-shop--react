import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Header(props) {
    const {classNameForNav, searchClassName} = props;
    const [headerToggle, setHeaderToggle] = useState(true);

    const openPopup = () => {
        document.body.classList.toggle("clip");
        
    }

    return (
        <header className={`header ${classNameForNav || ''}`}>
            <div className="header__wrapper">
                <NavLink to="/">
                    <picture>
                        <source srcSet="/img/logo.svg" media="(max-width: 767px)" />
                        <img src="/img/logo.svg" alt="Логотип «Softy Shop»" />
                    </picture>
                </NavLink>
                <button className={`header__btn ${headerToggle ? "header__btn--close" : "header__btn--opened"}`} onClick={() => {setHeaderToggle(!headerToggle)}} type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav className={`main-nav ${headerToggle ? "main-nav--hidden" : ""}`}>
                <ul className="main-nav__list">
                    <li className="main-nav__item">
                        <NavLink to="/auth/login" className="main-nav__link">Войти</NavLink>
                    </li>
                    <li className="main-nav__item">
                        <button className="main-nav__link" onClick={() => openPopup()}>Избранное</button>
                    </li>
                    <li className="main-nav__item">
                        <button className="main-nav__link">Корзина</button>
                    </li>
                </ul>
            </nav>
            <form className="header__form">
                <label htmlFor="search" className="header__label visually-hidden">Поиск</label>
                <input className={`header__search ${searchClassName || ''}`} type="search" name="search" id="search" placeholder="Поиск..." />
            </form>
        </header>
    );
}

export default Header;