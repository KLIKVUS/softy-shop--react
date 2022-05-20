const defState = [];

const ADD_ITEM = "ADD_ITEM";
const DELL_ITEM = "DELL_ITEM";

export const basket = (state=defState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let addCount = false;
            state.forEach((item) => {
                if (item.uniqueKey === action.payload.uniqueKey) {
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
        default: return state;
    }
}

export const addItemInBasketAction = (payload) => ({type: ADD_ITEM, payload: payload});
export const dellItemInBasketleAction = (payload) => ({type: DELL_ITEM, payload: payload});