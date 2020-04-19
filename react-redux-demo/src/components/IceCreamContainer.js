import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function IceCreamContainer(props) {
    return (       
        <div>
            <h2>number of IceCreams - {props.numberOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Creams</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numberOfIceCreams: state.iceCreams.numberOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)




