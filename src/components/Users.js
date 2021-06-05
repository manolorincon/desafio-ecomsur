import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SearchIcon from '@material-ui/icons/Search';
import MuiAlert from '@material-ui/lab/Alert';
import { UserDetails } from './UserDetails';
import { filterUser, getUsers } from '../actions/user';
import { closeAlert } from '../actions/ui';


export const Users = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getUsers() );
    }, [])

    const { users, usersFilter } = useSelector(state => state.user)
    const { alertOpen, mensaje } = useSelector(state => state.ui)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = async ({ target }) => {
        await dispatch (filterUser( users, target.value )) ;
    }

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant='filled' {...props} />;
    }

    const handleClose = () => {
        dispatch( closeAlert() );
    }

    return (
        <div className='user-main-content'>
            <h2>Perfiles de usuario</h2>
            <Paper component='form' className='user-search' onSubmit={ handleSubmit }>
                <InputBase
                    className='user-search-input'
                    inputProps={{ 'aria-label': 'Ingrese un nombre para la búsqueda' }}
                    name='username'
                    onChange={ (e) => handleInputChange(e) }
                    placeholder='Ingrese un nombre para la búsqueda'
                    autoComplete='off'
                />
                <IconButton type='submit' aria-label='search'>
                    <SearchIcon />
                </IconButton>
            </Paper>
            <UserDetails
                users = { usersFilter }
            />
            <Snackbar open={ alertOpen } autoHideDuration={2000} onClose={ handleClose } className='user-alert-content' >
                <Alert onClose={ handleClose } severity='success'>
                    { mensaje }
                </Alert>
            </Snackbar>
        </div>
    )
}
