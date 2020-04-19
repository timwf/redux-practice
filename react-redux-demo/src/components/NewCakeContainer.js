import React, { useState } from 'react'
import {connect} from 'react-redux'
import { buyCakes } from '../redux/cake/cakeActions'


function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    
    return (
        <div>
            <h2>number of cakes - {props.numberOfCakes}</h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCakes(number)}>Buy {number} cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCakes: (number) => dispatch(buyCakes(number))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)





