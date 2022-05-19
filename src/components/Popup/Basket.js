import React from 'react';
import Item from './Item';


function Basket() {
    return (
        <div className="basket" onClick={(e) => e.stopPropagation()}>
            <div className="basket__title">Корзина</div>

            <div className="basket__items">
                <Item itemTitle={"Common Projects"} itemCount={1} itemCost={"$549"} />
            </div>
        </div>
    );
}

export default Basket;