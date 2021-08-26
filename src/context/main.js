import React, { createContext, useReducer, useContext } from 'react';

const MainStateContext = createContext();
const MainDispatchContext = createContext();

const mainReducer = (state, {type, payload }) => {
	switch (type) {
		case "SET_CONTINENTS": 
			return {
				...state,
				data: payload.continents
			}
			case "SET_NEW_CONTINENT": 
			let newData = [...state.data]
			newData.push(payload)
			console.log(newData)
			return {
				...state,
				data: newData
			}
			case "SET_LAST_NODE_CLICK": 
			return {
				...state,
				lastNodeClicks: payload
			}
		default:
			return state
	}
}
 let initialState = {
	data: null,
	lastNodeClicks: null,
 }

export const MainProvider = ({ children }) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);
	return (
		<MainDispatchContext.Provider value={dispatch}>
			<MainStateContext.Provider value={state}>
				{children}
			</MainStateContext.Provider>
		</MainDispatchContext.Provider>
	)
}

export const useMainState = () => useContext(MainStateContext)
export const useMainDispatch = () => useContext(MainDispatchContext)