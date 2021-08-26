import React, {Fragment} from 'react';
import { gql, useQuery } from '@apollo/client';

import { useMainDispatch, useMainState } from '../../context/main';
import { Continent } from './sections';
import { ModalAddContent } from '../';

const GET_CONTINENTS = gql`
query getContinents{
  continents {
    code
    name
    countries {
      code
      name
      languages {
        name
				code
      }
    } 
  }
}
`

export default function Home() {
	const dispatch = useMainDispatch();
	const { data } = useMainState();

	const { loading } = useQuery(GET_CONTINENTS, {
		onCompleted: data => dispatch({type: "SET_CONTINENTS", payload: data}),
		onError: err => console.log(err)
	})

	let homeMarkup;
	if (loading || !data) {
		homeMarkup = <p>Loading</p>
	} else if(data) {
		homeMarkup = data.map((i) => {
			return <Continent key={i.name} item={i}/>
		})
	}
	
	return(
		<div id="home-page">
			{data ? <ModalAddContent/> : null}
			{homeMarkup}
		</div>
	)
}