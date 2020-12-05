import { people, getById } from "./db"

const resolvers = {
    Query: {
        people: () => people,
        // object, args
        person: (_, { id }) => getById(id),
    }
};

export default resolvers;