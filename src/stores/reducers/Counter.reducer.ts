// state
interface ICounterState {
    count: number
}

const initState: ICounterState = {
    count: 0,
}

// action
enum CounterActions {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}

interface IIncrementAction {
    type: CounterActions.INCREMENT
    payload: number
}

interface IDecrementAction {
    type: CounterActions.DECREMENT
    payload: number
}

export type ICounterAction = IIncrementAction | IDecrementAction

export const increment: (payload: number) => IIncrementAction = (payload) => {
    return {
        type: CounterActions.INCREMENT,
        payload,
    }
}

export const decrement: (payload: number) => IDecrementAction = (payload) => {
    return {
        type: CounterActions.DECREMENT,
        payload,
    }
}

export const counterReducer = (
    state: ICounterState = initState,
    action: ICounterAction
) => {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return { count: state.count + action.payload }
        case CounterActions.DECREMENT:
            return { count: state.count - action.payload }
        default:
            return state
    }
}
