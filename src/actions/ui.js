import { types } from '../types/types'

export const openAlert = ( mensaje ) => ({
    type: types.uiOpenAlert,
    payload: {
        mensaje
    }
})

export const closeAlert = () => ({
    type: types.uiCloseAlert
})