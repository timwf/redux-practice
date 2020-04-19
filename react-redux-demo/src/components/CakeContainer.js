import React from 'react'
import {connect} from 'react-redux'
import { buyCakes } from '../redux/cake/cakeActions'


function CakeContainer(props) {
        
    return (
        <div>
            <h2>number of cakes - {props.numberOfCakes}</h2>
            <button onClick={props.buyCakes}>Buy cake</button>
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
        buyCakes: () => dispatch(buyCakes())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)




