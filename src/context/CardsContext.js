import React from "react";


export const mainPageCards = {
    defaultCards: [
        {uniqueKey: "78234", titleCard: "Жёлтый сон", costCard: "50 $", imageSrc: "./img/cards/card1-image.jpg"},
        {uniqueKey: "67890", titleCard: "Пижама Кинг-Конг", costCard: "120 $", imageSrc: "./img/cards/card2-image.jpg"},
        {uniqueKey: "02373", titleCard: "Жёлтый сон", costCard: "50 $", imageSrc: "./img/cards/card1-image.jpg"},
        {uniqueKey: "64800", titleCard: "Пижама Кинг-Конг", costCard: "120 $", imageSrc: "./img/cards/card2-image.jpg"}
    ],
    specialCards: [
        {uniqueKey: "63299", titleCard: "Набор Золотая лагуна сноведений", costCard: "1100 $", imageSrc: "./img/cards/card3-image.jpg"}
    ]
};

export const MainPageCardsContext = React.createContext( mainPageCards );
