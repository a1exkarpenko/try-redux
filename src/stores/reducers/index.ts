import { combineReducers } from 'redux'
import { counterReducer } from './Counter.reducer'

export const rootReducer = combineReducers({
    counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>
