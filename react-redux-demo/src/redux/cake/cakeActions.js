import { BUY_CAKES } from "./cakeTypes"

console.log(BUY_CAKES);



export function buyCakes(number = 1){
    return{
        type: BUY_CAKES,
        payload: number
    }
}



