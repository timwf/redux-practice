import { BUY_CAKES } from "./cakeTypes"


export const initialState = {
    numberOfCakes: 10
}

export const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKES: return{
            ...state,
            numberOfCakes: state.numberOfCakes -1
        }
        default: return state
    }
}

