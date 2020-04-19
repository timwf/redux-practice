import { BUY_ICECREAM } from "./iceCreamTypes";


export function buyIceCream() {
    console.log(BUY_ICECREAM);
    return{
        type: 'BUY_ICECREAM'
    }
}

