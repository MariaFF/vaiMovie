export const Types = {
  FAVORITE_MOVIE: 'FAVORITE_MOVIE',
  REQUEST_MOVIES: 'REQUEST_MOVIES',
  SET_MOVIES: 'SET_MOVIES',
  FAILURE: 'FAILURE'
};

const initialState = {
  favorites: [],
  movies: [],
  loading: false,
  errorMessage: ''
};

const favoriteMovie = (state, movie) => {
  const arr = [...state.favorites];
  const index = arr.findIndex(({ imdbID }) => imdbID === movie.imdbID);

  if(index >= 0){
    arr.splice(index, 1);
  } else {
    arr.push(movie);
  }

  setMoviesMap(state, state.movies, arr);
  
  return {...state, favorites: arr}
}

const setMoviesMap = (state, listMovies, listFavorites) => {
  let arrMovies = [...state.movies]
  let arrMoviesTeste = listMovies.map(movie => {
    return {...movie, favorite: false}
  });
  arrMovies = arrMoviesTeste.map((movie, index) => {
    listFavorites.forEach((fav) => {
      if (fav.imdbID == movie.imdbID) {
        arrMoviesTeste[index].favorite = true;
      } else {
        arrMoviesTeste[index].favorite = false;
      }
    });
    return {...movie}
  });

  return {...state, movies: arrMovies, loading: false}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.FAVORITE_MOVIE:
      return favoriteMovie(state, action.payload);
    case Types.REQUEST_MOVIES:
      return { ...state, loading: true };
    case Types.SET_MOVIES:
      return setMoviesMap(state, action.payload, state.favorites);
    case Types.FAILURE:
      return { ...state, errorMessage: action.payload, loading: false}
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

export function requestMovies(params) {
  return {
    type: Types.REQUEST_MOVIES,
    payload: params,
  };
}

export function setMovies(movies) {
  return {
    type: Types.SET_MOVIES,
    payload: movies,
  };
}

export function failure(error) {
  return {
    type: Types.FAILURE,
    payload: error,
  };
}