import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const clinet = new ApolloClient({
		uri: "http://backend.codebootcamp.co.kr/graphql",
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={clinet}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
