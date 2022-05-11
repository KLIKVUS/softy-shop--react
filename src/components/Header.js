import React from 'react';


function Header() {
    return (
        <header className="header {{classNameForNav}}">
            <div className="header__wrapper">
                <a href="header__logo">
                    <picture>
                        <source srcSet="/img/logo.svg" media="(max-width: 767px)" />
                        <img src="/img/logo.svg" alt="Логотип «Softy Shop»" />
                    </picture>
                </a>
                <button className="header__btn header__btn--close" type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav className="main-nav">
                <ul className="main-nav__list">
                    <li className="main-nav__item">
                        <a href="./auth/login" className="main-nav__link">Войти</a>
                    </li>
                    <li className="main-nav__item">
                        <a href="./favorites" className="main-nav__link">Избранное</a>
                    </li>
                    <li className="main-nav__item">
                        <a href="./basket" className="main-nav__link">Корзина</a>
                    </li>
                </ul>
            </nav>
            <form className="header__form">
                <label htmlFor="search" className=" header__label visually-hidden">Поиск</label>
                <input className="header__search {{searchClassName}}" type="search" name="search" id="search" placeholder="Поиск..." />
            </form>
        </header>
    );
}

export default Header;
