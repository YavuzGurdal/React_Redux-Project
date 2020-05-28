import { SELL_ICECREAM } from './actionTypes'
import { ADD_ICECREAM } from './actionTypes'


export const sellIceCream = () => {
    return {
        type: SELL_ICECREAM,
        payload: 1
    }
}

export const addIceCream = (num) => { // num kullanicinin input boxa girdigi degeri ifade ediyor
    return {
        type: ADD_ICECREAM,
        payload: num
    }
}