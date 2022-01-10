export const Types = {
  FAVORITE_MOVIE: 'FAVORITE_MOVIE',
};

const initialState = {
  list: [],
};

const favoriteMovie = (state, movie) => {
  const arr = [...state.list];
  const index = arr.findIndex(({ imdbID }) => imdbID === movie.imdbID);

  if(index >= 0){
    arr.splice(index, 1);
  } else {
    arr.push(movie);
  }
  
  return {...state, list: arr}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.FAVORITE_MOVIE:
      return favoriteMovie(state, action.payload);

    default:
      return state;
  }
}

export function favoriteMovieAction(movie) {
  return {
    type: Types.FAVORITE_MOVIE,
    payload: movie,
  };
}
