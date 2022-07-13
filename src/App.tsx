import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { Provider } from 'react-redux'
import { store } from './stores/store'

const App: FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Layout />
            </Provider>
        </BrowserRouter>
    )
}

export default App
