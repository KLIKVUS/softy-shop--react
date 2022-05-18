import React from 'react';


function Basket() {
    return (
        <div className="basket" onClick={(e) => e.stopPropagation()}>
            <div className="basket__title">
                Shopping Bag
            </div>
        
            <div className="basket__item">
                <div className="basket__buttons">
                    <span className="basket__delete-btn" />
                    <span className="basket__like-btn" />
                </div>
        
                <div className="basket__image">
                    <img src="item-1.png" alt="" />
                </div>
        
                <div className="basket__description">
                    <span>Common Projects</span>
                    <span>Bball High</span>
                    <span>White</span>
                </div>
        
                <div className="basket__quantity">
                    <button className="basket__plus-btn" type="button" name="button">
                        <img src="plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" defaultValue={1} />
                    <button className="basket__minus-btn" type="button" name="button">
                        <img src="minus.svg" alt="" />
                    </button>
                </div>
        
                <div className="basket__total-price">$549</div>
            </div>
        </div>
    );
}

export default Basket;