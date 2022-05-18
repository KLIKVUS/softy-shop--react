const defState = {
    popup: {
        favouritesOpen: false,
        basketOpen: false
    },

    headerToggle: true
};

const POPUP_FAVOURITES_TOGGLE = "POPUP_FAVOURITES";
const POPUP_BASKET_TOGGLE = "POPUP_BASKET";
const HEADER_TOGGLE = "DECR_COUNT";

export const appConfigReducer = (state=defState, action) => {
    switch (action.type) {
        case POPUP_FAVOURITES_TOGGLE:
            return {...state, popup: {favouritesOpen: !state.popup.favouritesOpen, basketOpen: state.popup.basketOpen}};
        case POPUP_BASKET_TOGGLE:
            return {...state, popup: {favouritesOpen: state.popup.favouritesOpen, basketOpen: !state.popup.basketOpen}};
        case HEADER_TOGGLE:
            return {...state, headerToggle: !state.headerToggle};
        default: return state;
    }
}

export const popupFavoutitesToggleAction = () => ({type: POPUP_FAVOURITES_TOGGLE});
export const popupBasketToggleAction = () => ({type: POPUP_BASKET_TOGGLE});
export const headerToggleAction = () => ({type: HEADER_TOGGLE});