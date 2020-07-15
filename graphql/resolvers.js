import { getMovies} from "./db";

const resolvers = {
    Query : {
        movies: (_, {Limit, rating}) => getMovies(Limit, rating)
    }
    
}

export default resolvers;