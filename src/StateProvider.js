import React, { createContext, useContext, useReducer } from 'react';

//Comments are for my understanding
//Prepares the data layer
export const StateContext = createContext();

//This is used to wrapp the app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


//Here, we take out the information from the data layer.
export const useStateValue = () => useContext(StateContext);