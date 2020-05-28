import { ADD_PROFIT } from './actionTypes'
import { ADD_COST } from './actionTypes'


export const addProfit = (number) => {
    return {
        type: ADD_PROFIT,
        payload: number
    }
}

export const addCost = (number) => {
    return {
        type: ADD_COST,
        payload: number
    }
}