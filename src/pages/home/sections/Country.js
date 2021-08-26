import React from 'react';
import { CollapsibleTitle, CollapsibleContent } from '../../../reuseComponents'
import { Language } from '.';


export default function Country({country, continentCode}) {
	return (
		<div>
			<CollapsibleTitle>
				{country.languages.length === 0 ? `- ${country.name} (--empty)` : '- ' + country.name}
				<CollapsibleContent>
					{country.languages?.map((l, index, arr) => {
						return <Language 
						key={l.name}
						language={l.name} 
						continentCode={index === arr.length - 1 ? continentCode : null}
						/>
					})}
				</CollapsibleContent>
			</CollapsibleTitle>
		</div>
	)
}