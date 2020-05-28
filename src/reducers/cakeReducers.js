import { SELL_CAKE, ADD_CAKE } from '../actions/actionTypes';


const initialState = {
    numberOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {

    switch (action.type) {

        case SELL_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload
            }

        case ADD_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }

        default:
            return state;
    }
}

export default cakeReducer;