import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemInBasketAction } from '../../../store/basketReducer';


function SpecialCard(props) {
    const {uniqueKey, imageSrc, titleCard, costCard} = props;

    const dispatch = useDispatch();

    return (
        <div className="cards__item cards__item_big">
            <picture>
                <source srcSet={imageSrc} media="(max-width: 767px)" />
                <img src={imageSrc} alt="Фото примера пижамы" />
            </picture>
            <div className="item__top-panel flex-helper">
                <span>хит продаж</span>
                <span>специальное предложение</span>
            </div>
            <div className="item__body flex-helper">
                <div className="item__content-wrapper">
                    <h2 className="item__title">{titleCard}</h2>
                    <span className="item__cost">{costCard}</span>
                </div>
                <div className="item__content-wrapper">
                    <button className="item__btn" onClick={() => dispatch(addItemInBasketAction({uniqueKey, imageSrc, titleCard, costCard}))}>
                        <span className="visually-hidden">Добавить в корзину</span>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3375 10.5932L19.9789 3.28075C20.0974 2.75277 19.7011 2.25 19.1663 2.25H5.52806L5.20979 0.674648C5.13049 0.281988 4.78924 0 4.39337 0H0.833334C0.37309 0 0 0.377754 0 0.84375V1.40625C0 1.87225 0.37309 2.25 0.833334 2.25H3.25983L5.69899 14.3239C5.11545 14.6637 4.72222 15.3008 4.72222 16.0312C4.72222 17.1186 5.59278 18 6.66667 18C7.74056 18 8.61111 17.1186 8.61111 16.0312C8.61111 15.4802 8.38726 14.9824 8.02695 14.625H15.3064C14.9461 14.9824 14.7222 15.4802 14.7222 16.0312C14.7222 17.1186 15.5928 18 16.6667 18C17.7406 18 18.6111 17.1186 18.6111 16.0312C18.6111 15.2518 18.1636 14.5782 17.5146 14.2592L17.7062 13.4057C17.8247 12.8778 17.4283 12.375 16.8936 12.375H7.57351L7.34625 11.25H17.5249C17.914 11.25 18.2513 10.9774 18.3375 10.5932Z" fill="#000405" fillOpacity="0.7"/>
                        </svg>
                    </button>
                    <button className="item__btn">
                        <span className="visually-hidden">Добавить в избранное</span>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="#000405" fillOpacity="0.7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SpecialCard;
