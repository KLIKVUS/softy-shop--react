const defState = [];

const ADD_ITEM = "ADD_ITEM";
const DELL_ITEM = "DELL_ITEM";
const INCR_ITEM_COUNT = "INCR_ITEM_COUNT";
const DECR_ITEM_COUNT = "DECR_ITEM_COUNT";

export const basket = (state=defState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let addCount = false;
            state.forEach((item) => {
                if (item.uniqueKey === action.payload.uniqueKey && item.count < 10) {
                    addCount = true;
                    item.count += 1;
                }
            })

            if (!addCount) {
                return [
                    ...state,
                    {
                        uniqueKey: action.payload.uniqueKey,
                        imageSrc: action.payload.imageSrc,
                        title: action.payload.titleCard, 
                        count: 1, 
                        cost: action.payload.costCard
                    }
                ];
            }
        case DELL_ITEM:
            return state.filter(({ uniqueKey }) => Number(uniqueKey) !== Number(action.payload));
        case INCR_ITEM_COUNT:
            state.forEach((item) => {
                if (item.uniqueKey === action.payload && item.count < 10) item.count += 1;
            });
            return [...state];
        case DECR_ITEM_COUNT:
            state.forEach((item) => {
                if (item.uniqueKey === action.payload && item.count > 1) item.count -= 1;
            });
            return [...state];
        default: return state;
    }
}

export const addItemInBasketAction = (payload) => ({type: ADD_ITEM, payload: payload});
export const dellItemInBasketleAction = (payload) => ({type: DELL_ITEM, payload: payload});
export const incrItemCountInBasketleAction = (payload) => ({type: INCR_ITEM_COUNT, payload: payload});
export const decrItemCountInBasketleAction = (payload) => ({type: DECR_ITEM_COUNT, payload: payload});