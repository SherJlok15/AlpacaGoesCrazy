import React, { Fragment, useState, useEffect } from 'react'
import { useMainDispatch } from '../context/main'

 export default function CollapsibleTitle({ children, close }) {
	const dispatch = useMainDispatch()
	 const [isOpen, setIsOpen] = useState(false)
		useEffect(() => {
			if (close) {
				setIsOpen(false)
				dispatch({type: "SET_LAST_NODE_CLICK", payload: null})
			}
		}, [close])
	 	return (
			<Fragment>
				<h3 onClick={(e) => {
					setIsOpen(!isOpen)
					}}>{children[0]}</h3>
				{React.cloneElement(children[1], { isOpen })}
			</Fragment>
		 )

}



