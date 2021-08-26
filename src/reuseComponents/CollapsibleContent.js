import React, {Fragment} from 'react'


export const CollapsibleContent = ({ isOpen, children }) => {
	return (
		<Fragment>
			{
				isOpen ? 
				<div>
				{children?.map((i) => {
					return <li>
						{i}
					</li>
				})}
				</div>
				: 
				''
			}
		</Fragment>
	)

}







