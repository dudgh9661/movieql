let movies = [
    {
      id: 0,
      name: "Nicolas",
      age: 18,
      gender: "female"
    },
    {
      id: 1,
      name: "Jisu",
      age: 18,
      gender: "female"
    },
    {
      id: 2,
      name: "Japan Guy",
      age: 18,
      gender: "male"
    },
    {
      id: 3,
      name: "Daal",
      age: 18,
      gender: "male"
    },
    {
      id: 4,
      name: "JD",
      age: 18,
      gender: "male"
    },
    {
      id: 5,
      name: "moondaddi",
      age: 18,
      gender: "male"
    },
    {
      id: 6,
      name: "flynn",
      age: 18,
      gender: "male"
    }
  ];

  export const getMovies = () => movies;
  export const getById = id => {
      const filteredMovies = movies.filter( movie => id === movie.id );
      return filteredMovies[0]; 
  }

  export const deleteMovie = id => {
      const cleanedMovies = movies.filter(movie => id !== movie.id);
      if( movies.length > cleanedMovies.length ) {
          movies = cleanedMovies;
          return true;
      } else {
          return false;
      }
  }

export const addMovie = (name, age) => {
    const newMovie = {
        id : `${movies.length + 1 }`,
        name,
        age
    };

    movies.push(newMovie);
    return newMovie;
}