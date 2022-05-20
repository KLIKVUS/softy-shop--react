import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch} from "react-redux";

import { MainPageCardsContext }  from '../context/CardsContext';
import { headerToggleAction } from '../store/appConfigReducer';


function Header(props) {
    const {classNameForNav, searchClassName, headerToggleInfo, openPopup, setCards, coolScroll} = props;

    const cards = useContext(MainPageCardsContext);
    
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    const filterCards = (searchText, ListOfCards) => {
        if(!searchText) {
            return ListOfCards;
        }

        const filteredDefaultCards = ListOfCards.defaultCards.filter(({ titleCard }) => titleCard.toLowerCase().includes(searchText.toLowerCase()));
        const filteredSpecialCardsCards = ListOfCards.specialCards.filter(({ titleCard }) => titleCard.toLowerCase().includes(searchText.toLowerCase()));
        return {...ListOfCards, defaultCards: filteredDefaultCards, specialCards: filteredSpecialCardsCards};
    }

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredCards = filterCards(searchTerm, cards);
            setCards(filteredCards);
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
                        <button className="main-nav__link" /* onClick={() => openPopup("favourites")} */>Избранное</button>
                    </li>
                    <li className="main-nav__item">
                        <button className="main-nav__link" onClick={() => openPopup("basket")}>Корзина</button>
                    </li>
                </ul>
            </nav>
            <form className="header__form" onSubmit={(e) => {e.preventDefault(); coolScroll("#learn-more-anchor")}}>
                <label htmlFor="search" className="header__label visually-hidden">Поиск</label>
                <input className={`header__search ${searchClassName || ''}`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" name="search" id="search" placeholder="Поиск..." />
            </form>
        </header>
    );
}

export default Header;