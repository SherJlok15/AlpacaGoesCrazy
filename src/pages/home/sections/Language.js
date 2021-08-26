import React, { Fragment } from 'react';
import { useMainDispatch } from '../../../context/main';

export default function Language({ language, continentCode }) {
	const dispatch = useMainDispatch();
	return (
		<div className="language" 
		onClick={ 
			continentCode ? 
			() => { dispatch({type: "SET_LAST_NODE_CLICK", payload: {continentCode, close: true}})} 
			: null}
		>{"-- " + language}</div>
	)
}