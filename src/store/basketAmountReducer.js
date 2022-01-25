const defaultState = {
    itemsInBasket: 0
}

export const basketAmountReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {...state, itemsInBasket: action.payload}
        case "REMOVE_FROM_BASKET":
            return {...state, itemsInBasket: 0}
        default: return state;
    }
}
