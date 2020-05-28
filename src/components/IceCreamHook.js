import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sellIceCream, addIceCream } from '../actions/iceCreamActions'
import { addProfit, addCost } from '../actions/profitCostActions'


function IceCreamHook() {

    const [num, setNum] = useState(0)

    const deger = useSelector(state => state.dondurma.numberOfIceCream)

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of IceCreams : {deger}</h2>
            <button onClick={() => {
                dispatch(sellIceCream())
                dispatch(addProfit(1))
            }}>
                Sell One IceCream
            </button>
            <br />
            <br />
            <input type="number" onChange={(e) => setNum(Number(e.target.value))} />
            <button style={{ marginLeft: '5px' }} onClick={() => {
                dispatch(addIceCream(num))
                dispatch(addCost(num * 0.5))
            }} >
                Add Some IceCream
            </button>
        </div>
    )
}

export default IceCreamHook
