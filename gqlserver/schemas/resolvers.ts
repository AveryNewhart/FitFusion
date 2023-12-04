import User from "../models/User"; 

export const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("users")
    },
    user: async (_, { username }) => {
      return User.findOne({ username }).populate("users")
    }
  },
  Mutation: {
    createUser: async (_, { name, username, email, password }) => {
      
    },
    updateUser: async (_, { id, name, username, email, password }) => {

    },
    deleteUser: async (_, { id }) => {

    },
  },
};

