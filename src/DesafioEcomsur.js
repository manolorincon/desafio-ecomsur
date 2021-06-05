import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Loading } from './components/Loading';
import { AppRouter } from './routes/AppRouter';
import { store } from './store/store';

export default class DesafioEcomsur extends Component {

    constructor() {
        super()
        this.state = { isLoading: true }
    }

    componentDidMount() {
        setTimeout(() => { 
            this.setState({ isLoading: false })
        }, 1500);
    }
    

    render() {
        return (
            <Provider store = { store }>
                { this.state.isLoading  === true ? <Loading /> : <AppRouter /> }
            </Provider>
        )
    }
}
