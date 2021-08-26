import React from 'react';
import './App.css'
import ApolloProvider from './ApolloProvider';
import { MainProvider } from './context/main';

import { Home } from './pages';

function App() {

	return (
		<ApolloProvider>
			<MainProvider>
				<Home />
			</MainProvider>
		</ApolloProvider>

	);
}

export default App;
