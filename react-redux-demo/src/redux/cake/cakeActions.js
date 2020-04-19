import { BUY_CAKES } from "./cakeTypes"

export function buyCakes(number = 1){
    return{
        type: BUY_CAKES,
        payload: number
    }
}



