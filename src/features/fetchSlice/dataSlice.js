import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    isLoading: false,
    input: '',
    error: ''
}

const dataSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchData (state, action) {
            state.data = action.payload
        },
        setInput(state,action){
            state.input = action.payload
        },
        setLoading (state) {
            state.isLoading = !state.isLoading; 
        },
        setError(state, action) {
            state.error = action.payload; 
        }
    }
})

export const { fetchData, setInput, setLoading, setError } = dataSlice.actions;
export default dataSlice.reducer;
