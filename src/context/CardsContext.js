import React from "react";


export const mainPageCards = {
    defaultCards: [
        {titleCard: "Жёлтый сон", costCard: "50 $", imageSrc: "./img/cards/card1-image.jpg"},
        {titleCard: "Пижама Кинг-Конг", costCard: "120 $", imageSrc: "./img/cards/card2-image.jpg"},
        {titleCard: "Жёлтый сон", costCard: "50 $", imageSrc: "./img/cards/card1-image.jpg"},
        {titleCard: "Пижама Кинг-Конг", costCard: "120 $", imageSrc: "./img/cards/card2-image.jpg"}
    ],
    specialCards: [
        {titleCard: "Набор Золотая лагуна сноведений", costCard: "1100 $", imageSrc: "./img/cards/card3-image.jpg"}
    ]
};

export const MainPageCardsContext = React.createContext( mainPageCards );
