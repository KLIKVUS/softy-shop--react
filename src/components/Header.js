import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch} from "react-redux";
import {MainPageCardsContext}  from '../context/CardsContext';

import { headerToggleAction } from '../store/appConfigReducer';


function Header(props) {
    const {classNameForNav, searchClassName, headerToggleInfo, openPopup, setdefaultCards} = props;

    const cards = useContext(MainPageCardsContext);
    
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    const filterCards = (searchText, ListOfCards) => {
        if(!searchText) {
            return ListOfCards;
        }
        console.log(searchText)
        return ListOfCards.filter(({ titleCard }) => titleCard.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredCards = filterCards(searchTerm, cards);
            setdefaultCards(filteredCards);
        }, 300);
        return () => clearTimeout(Debounce);
    },[searchTerm])

    return (
        <header className={`header ${classNameForNav || ''}`}>
            <div className="header__wrapper">
                <NavLink to="/">
                    <picture>
                        <source srcSet="/img/logo.svg" media="(max-width: 767px)" />
                        <img src="/img/logo.svg" alt="Логотип «Softy Shop»" />
                    </picture>
                </NavLink>
                <button className={`header__btn ${headerToggleInfo ? "header__btn--close" : "header__btn--opened"}`} onClick={() => {dispatch(headerToggleAction())}} type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav className={`main-nav ${headerToggleInfo ? "main-nav--hidden" : ""}`}>
                <ul className="main-nav__list">
                    <li className="main-nav__item">
                        <NavLink to="/auth/login" className="main-nav__link">Войти</NavLink>
                    </li>
                    <li className="main-nav__item">
                        <button className="main-nav__link" onClick={() => openPopup("favourites")}>Избранное</button>
                    </li>
                    <li className="main-nav__item">
                        <button className="main-nav__link" onClick={() => openPopup("basket")}>Корзина</button>
                    </li>
                </ul>
            </nav>
            <form className="header__form">
                <label htmlFor="search" className="header__label visually-hidden">Поиск</label>
                <input className={`header__search ${searchClassName || ''}`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" name="search" id="search" placeholder="Поиск..." />
            </form>
        </header>
    );
}

export default Header;