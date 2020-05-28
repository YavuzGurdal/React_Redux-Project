import React from 'react'
import { useSelector } from 'react-redux'

function ProfitCostHook() {

    const karZarar = useSelector(state => state.x.miktar)
    return (
        <div>
            <h2>Kar Zarar Durumu : {karZarar}</h2>
        </div>
    )
}

export default ProfitCostHook
