import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CounterPage from '../pages/Counter.page'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<CounterPage />} />
        </Routes>
    )
}

export default Router
