import groups from "./resolvers/groups";
import users from "./resolvers/users";

export default {
  Query: {
    users: users.Query.users,
    user: users.Query.user,
  },

  Mutation: {
    createUser: users.Mutation.createUser,
    createGroup: groups.Mutation.createGroup,
  },
};
