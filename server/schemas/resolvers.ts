export const resolvers = {
  Query: {
    users: async () => {
      // Fetch and return all users from your data source
    },
  },
  Mutation: {
    createUser: async (_, { name, username, email, password }) => {
      
    },
    updateUser: async (_, { id, name, username, email, password }) => {
      // Update the user with the provided ID and return the updated user
    },
    deleteUser: async (_, { id }) => {
      // Delete the user with the provided ID and return the deleted user
    },
  },
};

