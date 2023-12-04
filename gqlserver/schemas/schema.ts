import gql from "graphql-tag"
  
 export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    # posts(findTitle: String): [Post]
  }

  # type Post {
  #   id: Int!
  #   title: String!
  #   author: User
  # }

  type Query {
    users: [User]
  }

type Mutation {
  createUser(name: String!, username: String!, email: String!, password: String!): User
  updateUser(id: ID!, name: String, username: String, email: String, password: String): User
  deleteUser(id: ID!): User

  #  createPost(title: String!, authorId: ID!): Post
  #  updatePost(id: ID!, title: String, authorId: ID): Post
  #  deletePost(id: ID!): Post
}`
