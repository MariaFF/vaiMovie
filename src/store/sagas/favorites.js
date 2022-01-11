import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { Types } from '../ducks/favorites';
import { fetchMoviesApi } from '../../services/api';
import * as FavoriteActions from '../ducks/favorites';

const fetchMoviesRequest = async (searchText) => {
  // console.log('fetch params', searchText);
  return await fetchMoviesApi({s: searchText});
}


function* fetchMovies({ payload }) {
  try {
    const response = yield call(fetchMoviesRequest, payload);
    yield put(FavoriteActions.setMovies(response.Search));
  } catch (error) {
    yield put(FavoriteActions.failure(error.response && error.response.data ? error.response.data : error))
  }
}

export default function* () {
  yield takeLatest(Types.REQUEST_MOVIES, fetchMovies);
}
