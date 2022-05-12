import React from 'react';
import { NavLink } from 'react-router-dom';

import Card from './partials/Card';
import SpecialCard from './partials/SpecialCard';
import SubBlock from './partials/SubBlock';


function MainCatalog() {
    let cards = [
        {titleCard: "Жёлтый сон", costCard: "50 $", imageSrc: "./img/cards/card1-image.jpg"},
        {titleCard: "Пижама Кинг-Конг", costCard: "120 $", imageSrc: "./img/cards/card2-image.jpg"}
    ]
    let specialCards = [
        {titleCard: "Набор Золотая лагуна сноведений", costCard: "1100 $", imageSrc: "./img/cards/card3-image.jpg"}
    ]

    return (
        <main className="main flex-helper">
            <section className="catalog-first-screen flex-helper">
                <h1 className="catalog-first-screen__title">Новая коллекция</h1>
                <p className="catalog-first-screen__text">Пижама мягкая как сны</p>
                <a className="catalog-first-screen__link" href="#">Смотреть</a>
            </section>
            <section className="catalog__filter">
                <h3 className="visually-hidden">Фильтр</h3>
                <div className="catalog__filter-wrapper">
                    <div className="catalog__filter-sort">
                        <label className="catalog__filter-sort-label" htmlFor="sort">Сортировать</label>
                        <select className="catalog__filter-sort-select" name="sort" id="sort">
                            <option value="freshness">Новинки</option>
                            <option value="priceincr">Цена по возрастанию</option>
                            <option value="pricedecr">Цена по убыванию</option>
                        </select>
                    </div>
                    <div className="catalog__filter-filter">
                        <button className="catalog__filter-filter-btn" type="button">Фильтр</button>
                    </div>
                </div>
            </section>
            <section className="main-body">
                <h2 className="visually-hidden">Наши предложения</h2>
                <section className="cards">
                    <h1 className="cards__title">Популярные пижамы</h1>
                    <div className="cards__items">
                    {cards.map((card, ind) => <Card key={ind} titleCard={card.titleCard} costCard={card.costCard} imageSrc={card.imageSrc} />)}
                        {specialCards.map((card, ind) => <SpecialCard key={ind} titleCard={card.titleCard} costCard={card.costCard} imageSrc={card.imageSrc} />)}
                        {cards.map((card, ind) => <Card key={ind} titleCard={card.titleCard} costCard={card.costCard} imageSrc={card.imageSrc} />)}
                    </div>
                </section>
            </section>
        </main>
    );
}

export default MainCatalog;
