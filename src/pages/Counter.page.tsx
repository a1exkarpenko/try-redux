import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelect } from '../hooks/redux.hook'
import { decrement, increment } from '../stores/reducers/Counter.reducer'

const CounterPage = () => {
    const dispatch = useDispatch()
    const { count } = useAppSelect((state) => state.counterReducer)

    return (
        <div className="container grow mx-auto w-full h-full flex flex-col items-center justify-center">
            <p className="text-[30px]">{count}</p>
            <div className="flex justify-center items-center space-x-[20px]">
                <button
                    type="button"
                    className="flex justify-center items-center border-0 rounded-full bg-[black]
                    text-[white] w-[50px] h-[50px] text-[20px]"
                    onClick={() => dispatch(decrement(1))}
                >
                    -
                </button>
                <button
                    type="button"
                    className="flex justify-center items-center border-0 rounded-full bg-[black]
                    text-[white] w-[50px] h-[50px] text-[20px]"
                    onClick={() => dispatch(increment(10))}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default CounterPage
