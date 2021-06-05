import { types } from '../types/types';

const initialState = {
    alertOpen: false,
    mensaje: ''
}

export const uiReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case types.uiOpenAlert:
            return {
                ...state,
                alertOpen: true,
                mensaje: action.payload.mensaje
            }
        case types.uiCloseAlert:
            return {
                ...state,
                alertOpen: false,
                mensaje: ''
            }
        default:
            return state;

    }

};