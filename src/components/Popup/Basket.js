import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';


function Basket() {
    const items = useSelector((state) => state.basket);

    return (
        <div className="basket" onClick={(e) => e.stopPropagation()}>
            <div className="basket__title">Корзина</div>

            <div className="basket__items">
                {/* <Item imageSrc={"./img/cards/card1-image.jpg"} itemTitle={"Common Projects"} itemCount={1} itemCost={"$549"} /> */}

                {items && items.map((item, ind) => <Item key={ind} uniqueKey={item.uniqueKey} imageSrc={item.imageSrc} itemTitle={item.title} itemCount={item.count} itemCost={item.cost} />)}
            </div>
        </div>
    );
}

export default Basket;