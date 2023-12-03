import ApolloServer from '@apollo/client';
import { gql } from '@apollo/client/core';
import { typeDefs } from './schemas/schema'
import { resolvers } from './schemas/resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

