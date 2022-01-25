const defaultState = {
    quantityOfGoods: 0
}

export const pageAmountReducer = (state = defaultState, action) => {
    switch(action.type){
        case "ADD":
            return {...state, quantityOfGoods: state.quantityOfGoods === 10 ? state.quantityOfGoods : state.quantityOfGoods + action.payload}
        case "REMOVE":
            return {...state, quantityOfGoods: state.quantityOfGoods === 0 ? state.quantityOfGoods :state.quantityOfGoods - action.payload}
        default: return state;
    }
}
