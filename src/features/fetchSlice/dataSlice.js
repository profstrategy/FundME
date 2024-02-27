import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    isLoading: false,
    searchQuery: '',
    error: '',
    notUser: '',
    selectedUser: '',
    profile: {}
};

const dataSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchData(state, action) {
            state.data = action.payload;
        },

        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },

        setSelectedUser(state, action) {
            state.selectedUser = action.payload;
        },

        setLoading(state) {
            state.isLoading = !state.isLoading;
        },

        setError(state, action) {
            state.error = action.payload;
        },

        setNotUser(state, action) {
            state.notUser = action.payload;
        },

        setProfile(state,action) {
            state.profile = action.payload
        }
    }
});

export const { fetchData, setSearchQuery, setLoading, setError, setNotUser, setSelectedUser,setProfile } = dataSlice.actions;
export default dataSlice.reducer;


