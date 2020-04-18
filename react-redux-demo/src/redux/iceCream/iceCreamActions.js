import { BUY_ICECREAM } from "./iceCreamTypes";

console.log(BUY_ICECREAM);


export function buyIceCream() {
    console.log(BUY_ICECREAM);
    return{
        type: 'BUY_ICECREAM'
    }
}

