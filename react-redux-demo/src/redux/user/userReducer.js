import { 
    FETCH_USER_REQUEST, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE 
} from './userTypes';

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }            

        case FETCH_USER_SUCCESS:
            return{
                ...state,
                data: action.payload,
                loading: false,
                error: ""
            }

        case FETCH_USER_FAILURE:
            return{
                ...MediaStreamTrackEvent,
                error: action.payload,
                data: [],
                loading: false

            }
 
        default: return state

    }

}

export default userReducer