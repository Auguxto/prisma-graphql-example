import { GraphQLServer } from "graphql-yoga";
import path from "path";

import resolvers from "./Graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "Graphql", "schema.graphql"),
  resolvers,
});

server.start();
