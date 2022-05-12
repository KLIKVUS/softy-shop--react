import React from 'react';
import { NavLink } from 'react-router-dom';


function Header(props) {
    const {classNameForNav, searchClassName} = props;

    return (
        <header className={`header ${classNameForNav || ''}`}>
            <div className="header__wrapper">
                <NavLink to="/">
                    <picture>
                        <source srcSet="/img/logo.svg" media="(max-width: 767px)" />
                        <img src="/img/logo.svg" alt="Логотип «Softy Shop»" />
                    </picture>
                </NavLink>
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
                        <NavLink to="/auth/login" className="main-nav__link">Войти</NavLink>
                    </li>
                    <li className="main-nav__item">
                        <NavLink to="/favorites" className="main-nav__link">Избранное</NavLink>
                    </li>
                    <li className="main-nav__item">
                        <NavLink to="/basket" className="main-nav__link">Корзина</NavLink>
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