import { fetchAPI } from '../helpers/fetch';
import { types } from '../types/types';
import { openAlert } from './ui';

export const getUsers = () => {

    return async( dispatch ) => {

        dispatch( startUpload() );
        const resp = await fetchAPI( 'results=15', 'GET' );
        const body = await resp.json();

        if( body.results.length > 0 ){
            await dispatch( finishUpload() );
            await dispatch( resultUser( body.results ));
        }else{
            await dispatch( finishUpload() );
            await dispatch( resultUser( [] ));
        }
        
    }

}

export const deleteUser = ( arrayUser, users, emailUser ) => {

    return async( dispatch ) => {

        const newUsers = arrayUser.filter( (value, index, arr) => {
            return value.email !== emailUser
        })

        const filterUsers = users.filter( (value, index, arr) => {
            return value.email !== emailUser
        })

        dispatch( deleteUserArray( newUsers, filterUsers ));
        dispatch( openAlert( 'Usuario eliminado exitósamente' ));
        
    }

}

export const filterUser = ( users, userName ) => {

    return async( dispatch ) => {

        const newUsers = users.filter( (value ) => {
            const name = `${ value.name.first.toLowerCase() } ${ value.name.last.toLowerCase() }`;
            return name.includes( userName.toLowerCase() ) 
        })

        dispatch( filterUserArray( newUsers ));
        
    }

}

const resultUser = ( result ) => ({
    type: types.userResultData,
    payload: {
        result
    }
})

const deleteUserArray = ( newUsers, filterUsers ) => ({
    type: types.userDeleteData,
    payload: {
        newUsers,
        filterUsers
    }
})

const filterUserArray = ( result ) => ({
    type: types.userFilterData,
    payload: {
        result
    }
})

const startUpload = () => ({
    type: types.userStartSubmit
})

const finishUpload = () => ({
    type: types.userFinishSubmit
})