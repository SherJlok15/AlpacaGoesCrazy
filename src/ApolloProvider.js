import { 
	ApolloClient, 
	InMemoryCache, 
	ApolloProvider as Provider,
	createHttpLink
} from '@apollo/client'

import { setContext } from '@apollo/client/link/context';

const client = new ApolloClient({
	uri: 'https://countries.trevorblades.com/',
	cache: new InMemoryCache()
})

export default function ApolloProvider(props) {
	return <Provider client={client} {...props} />
}