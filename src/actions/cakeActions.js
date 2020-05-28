import { SELL_CAKE } from './actionTypes'
import { ADD_CAKE } from './actionTypes'


export const sellCake = () => {
    return {
        type: SELL_CAKE,
        payload: 1
    }
}

export const addCake = (num) => { // num kullanicinin input boxa girdigi degeri ifade ediyor
    return {
        type: ADD_CAKE,
        payload: num
    }
}