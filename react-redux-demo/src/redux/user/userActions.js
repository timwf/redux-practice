import axios from 'axios'

import { 
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './userTypes'


export function fetchUserRequest(){
    return {
        type: FETCH_USER_REQUEST
    }
}

export function fetchUserSuccess(users){
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export function fetchUserFailure(error){
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export function fetchUsers(){
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resonse => {
            const users = resonse.data;
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetchUserFailure(errorMsg))
        })

    }
}

