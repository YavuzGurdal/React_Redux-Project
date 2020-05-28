import { SELL_ICECREAM, ADD_ICECREAM } from '../actions/actionTypes';


const initialState = {
    numberOfIceCream: 20
}

const iceCreamReducer = (state = initialState, action) => {

    switch (action.type) {

        case SELL_ICECREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - action.payload
            }

        case ADD_ICECREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream + action.payload
            }

        default:
            return state;
    }
}

export default iceCreamReducer;