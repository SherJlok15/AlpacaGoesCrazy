import React from 'react';
import { useMainState } from '../../../context/main';

import { CollapsibleTitle, CollapsibleContent } from '../../../reuseComponents'
import { Country } from '.';

export default function Continent({ item }) {
	const { lastNodeClicks } = useMainState()
	return (
		<div>
			<CollapsibleTitle
				close={lastNodeClicks?.continentCode === item.code && lastNodeClicks?.close
					? true : false}>
				{item.countries.length === 0 ? `${item.name} (--empty)` : item.name}

				<CollapsibleContent >
					{item.countries.map((c) => {

							return (
								<div className="country">
									<Country country={c} continentCode={item.code} />
								</div>
							)
						
					})}
				</CollapsibleContent>
			</CollapsibleTitle>
		</div>
	)
}