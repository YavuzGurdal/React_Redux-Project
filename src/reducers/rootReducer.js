import { combineReducers } from 'redux'
import cakeReducers from './cakeReducers'
import iceCreamReducer from './iceCreamReducers'
import profitCostReducer from './profitCostReducer'


const rootReducer = combineReducers({
    cake: cakeReducers, // bu cake CakeHook.js deki cake ile ayni.
    dondurma: iceCreamReducer,
    x: profitCostReducer
})

export default rootReducer