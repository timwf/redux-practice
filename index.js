const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddle = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake(){
    return {
        type: BUY_CAKE,
        info: "first deruux action"
    }
}

function buyIcecream(){
    return {
        type: BUY_ICECREAM,
        info: "icecream bought"
    }
}

const initialState = {
    numberOfCakes: 10,
    numberOfIcecreams: 15
}

const initialCakeState = {
    numberOfCakes: 10
}

const initialIcecreamState = {
    numberOfIcecreams: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes -1
    }
        default: return state
    }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numberOfIcecreams: state.numberOfIcecreams - 1
        }
        default: return state
    }
}

const rootRedcuer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
const store = createStore(rootRedcuer, applyMiddle(logger))

console.log('initialState', store.getState());

const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe()

