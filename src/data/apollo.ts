import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `bearer ${process.env.GITHUB_PAT}`,
  },
  cache: new InMemoryCache(),
})

export default client
