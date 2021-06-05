import { types } from '../types/types';

const initialState = {
    users: [],
    usersFilter: [],
    submit: false
}

export const userReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case types.userStartSubmit:
            return {
                ...state,
                submit: true
            }
        case types.userFinishSubmit:
            return {
                ...state,
                submit: false
            }
        case types.userResultData:
            return {
                ...state,
                users: action.payload.result,
                usersFilter: action.payload.result
            }
        case types.userDeleteData:
            return {
                ...state,
                users: action.payload.newUsers,
                usersFilter: action.payload.filterUsers,
            }
        case types.userFilterData:
            return {
                ...state,
                usersFilter: action.payload.result
            }
        default:
            return state;

    }

};