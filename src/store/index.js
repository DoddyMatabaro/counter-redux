import { configureStore, createSlice } from 'redux-toolkit'


const counterSlice =  createSlice({
    name: 'counter',
    initialState: { counter: 0},
    reducer: {
        increment(state, action){state.counter++},
        addValue(state, action){state.counter += action.payload},
        decrement(state, action){state.counter--}
    }
})

export const acitons = counterSlice.actions;