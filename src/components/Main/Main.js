import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Card from './partials/Card';
import SpecialCard from './partials/SpecialCard';
import SubBlock from './partials/SubBlock';
import { MainPageCardsContext } from '../../context/CardsContext';


function Main(props) {
    const {createLinksWithCoolScroll, coolScroll} = props;
    useEffect(() => createLinksWithCoolScroll() );

    const cards = useContext(MainPageCardsContext);

    return (
        <main className="main flex-helper">
            <div className="main-header">
                <section className="main-header__image-wrapper">
                    <h1 className="visually-hidden">Картинка для tablet и pc версий главной страницы</h1>
                </section>
                <section className="main-header__title-wrapper">
                    <h1 className="main-header__title">Самая уютная пижама на свете</h1>
                    <NavLink to="#learn-more-anchor" className="main-header__link scroll-to">Узнать больше</NavLink>
                </section>
            </div>
            <div className="main-body" id="learn-more-anchor">
                <section className="main-body__cards cards">
                    <h1 className="cards__title"><span>Популярные</span><span className="cards__title-word-right">пижамы</span></h1>
                    <div className="cards__items">
                        {cards.defaultCards.map((card, ind) => <Card key={ind} titleCard={card.titleCard} costCard={card.costCard} imageSrc={card.imageSrc} />)}
                        {cards.specialCards.map((card, ind) => <SpecialCard key={ind} titleCard={card.titleCard} costCard={card.costCard} imageSrc={card.imageSrc} />)}
                    </div>

                    <div className="cards__link-wrapper flex-helper">
                        <NavLink to="/catalog" className="cards__link" onClick={() => coolScroll()}>Смотреть все</NavLink>
                    </div>
                </section>

                <SubBlock />
            </div>
        </main>
    );
}

export default Main;
