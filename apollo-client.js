import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`},
});

export default client;