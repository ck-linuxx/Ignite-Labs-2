import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o5f8jl0nnj01xxgye76p5b/master",
  cache:new InMemoryCache()
})