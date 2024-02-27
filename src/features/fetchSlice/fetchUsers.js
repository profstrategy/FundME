import { useEffect } from 'react';
import { fetchData, setLoading,setError, setProfile } from './dataSlice';

const BASE_URL = "http://localhost:3000";

export function DataProvider() {
        return async function getfriends(dispatch) {
            
            try {
                dispatch(setLoading(true));
                const res = await fetch(`${BASE_URL}/users`);
                if(!res.ok) throw new Error()
                const data = await res.json();
                dispatch(fetchData(data));
            } catch (error) {
                dispatch(setError(error.message))
            } finally {
                dispatch(setLoading(false));
            }
            
        }
}

export function getProfile(id) {
    return async function getfriend(dispatch) {
        
        try {
            dispatch(setLoading(true));
            const res = await fetch(`${BASE_URL}/users/${id}`);
            if(!res.ok) throw new Error('Failed to fetch data')
            const data = await res.json();
            dispatch(setProfile(data));
        } catch (error) {
            dispatch(setError(error.message))
        } finally {
            dispatch(setLoading(false));
        }
        
    }
}








