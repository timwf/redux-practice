import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCakes} from '../redux/cake/cakeActions'

function HooksCakeContainer() {

    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>number of cakes 2 - {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCakes())}>Buy Cakes</button>
        </div>
    )
}

export default HooksCakeContainer
