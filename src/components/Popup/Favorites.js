import React from 'react';


function Favorites() {
    return (
        <div class="shopping-cart">
            <div class="shopping-cart__title">
                Shopping Bag
            </div>
        
            <div class="shopping-cart__item">
                <div class="shopping-cart__buttons">
                    <span class="shopping-cart__delete-btn" />
                    <span class="shopping-cart__like-btn" />
                </div>
        
                <div class="shopping-cart__image">
                    <img src="item-1.png" alt="" />
                </div>
        
                <div class="shopping-cart__description">
                    <span>Common Projects</span>
                    <span>Bball High</span>
                    <span>White</span>
                </div>
        
                <div class="shopping-cart__quantity">
                    <button class="shopping-cart__plus-btn" type="button" name="button">
                        <img src="plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value="1" />
                    <button class="shopping-cart__minus-btn" type="button" name="button">
                        <img src="minus.svg" alt="" />
                    </button>
                </div>
        
                <div class="shopping-cart__total-price">$549</div>
            </div>
        </div>
    );
}

export default Favorites;