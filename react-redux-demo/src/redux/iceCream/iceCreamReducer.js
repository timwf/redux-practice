import { BUY_ICECREAM } from "./iceCreamTypes";


const initialState = {
    numberOfIceCreams: 200
}

export const iceCreamReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        }
        default: return state
    }
}

