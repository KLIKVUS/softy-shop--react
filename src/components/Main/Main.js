import React from 'react';
import Card from './partials/Card';
import SpecialCard from './partials/SpecialCard';
import SubBlock from './partials/SubBlock';


function Main() {
    return (
        <main class="main flex-helper">
            <div class="main-header">
                <section class="main-header__image-wrapper">
                    <h1 class="visually-hidden">Картинка для tablet и pc версий главной страницы</h1>
                </section>
                <section class="main-header__title-wrapper">
                    <h1 class="main-header__title">Самая уютная пижама на свете</h1>
                    <a href="" class="main-header__link">Узнать больше</a>
                </section>
            </div>
            <div class="main-body">
                <section class="main-body__cards cards">
                    <h1 class="cards__title"><span>Популярные</span><span class="cards__title-word-right">пижамы</span></h1>
                    <div class="cards__items">
                        <Card titleCard="Жёлтый сон" costCard="50 $" imageSrc="./img/cards/card1-image.jpg" />
                        <Card titleCard="Пижама Кинг-Конг" costCard="120 $" imageSrc="./img/cards/card2-image.jpg" />

                        <SpecialCard titleCard="Набор Золотая лагуна сноведений" costCard="1100 $" imageSrc="./img/cards/card3-image.jpg" />

                        <Card titleCard="Жёлтый сон" costCard="50 $" imageSrc="./img/cards/card1-image.jpg" />
                        <Card titleCard="Пижама Кинг-Конг" costCard="120 $" imageSrc="./img/cards/card2-image.jpg" />
                    </div>

                    <div class="cards__link-wrapper flex-helper"><a href="/catalog" class="cards__link">Смотреть все</a></div>
                </section>

                <SubBlock />
            </div>
        </main>
    );
}

export default Main;
