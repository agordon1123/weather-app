import React, { useContext, useReducer, createContext } from 'react';
import { getCache } from './utils/cache/index';

export const AppContext = createContext();

export const useAppState = () => {
    return useContext(AppContext);
}

const appStateReducer = (state, action) => {
    switch(action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'SET_CACHE':
            return {
                ...state,
                cache: action.payload
            }
        default:
            return state;
    }
}

const initialState = {
    data: {},
    cache: getCache(),
    loading: true
}

export const AppStateProvider = ({ children }) => {
    const appState = useReducer(appStateReducer, initialState);
    return (
        <AppContext.Provider value={appState}>{children}</AppContext.Provider>
    )
}