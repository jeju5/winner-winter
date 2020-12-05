import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers,
});

server.start(() => console.log('Server(GraphQL Playground) is running on http://127.0.0.1:4000'))