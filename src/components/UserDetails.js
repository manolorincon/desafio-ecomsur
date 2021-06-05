import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../actions/user';

export const UserDetails = ({ users }) => {

    const dispatch = useDispatch();
    const { users:arrayUser } = useSelector(state => state.user)

    const handleDeleteUser = ( emailUser ) => {
        dispatch( deleteUser( arrayUser, users, emailUser ));
    }

    if( users.length === 0 ){
        return (
            <div>
                <h3>No se encontraron usuarios</h3>
            </div>
        )
    }

    return (
        <div className='user-details-content'>
            {
                users.map(( user, index ) => (
                        <div className='user-details-content-box-info animate__animated animate__fadeIn animate__slower' key={index}>
                            <span onClick={ () => handleDeleteUser( user.email ) }>x</span>
                            <div className='user-details-content-box-info-main'>
                                <img alt='user-avatar' src={ user.picture.large }></img>
                                <h4>{ `${ user.name.first } ${ user.name.last }` }</h4>
                                <p>{ `@${ user.login.username }` }</p>
                                <p>{ `${ user.location.state }, ${ user.location.country }` }</p>
                            </div>
                            <div className='user-details-content-box-info-text'>
                                <p><b>Edad: </b>{ user.dob.age }</p>
                                <p><b>Dirección: </b>{` ${ user.location.street.name } ${ user.location.street.number }, ${ user.location.city }`}</p>
                                <p><b>Email: </b>{ user.email }</p>
                                <p><b>Teléfono: </b>{ user.cell }</p>
                            </div>
                        </div>                    
                ))
            }
        </div>
    )
}
