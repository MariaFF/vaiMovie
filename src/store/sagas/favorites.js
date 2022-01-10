import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { Types } from '../ducks/favorites';



// function* fetchMovies({ payload }) {
//   try {
//     const { data } = yield call(fetchChurchRequest, payload);
//     yield put(ChurchActions.setChurches(data.data));
//   } catch (error) {
//     yield put(ChurchActions.failure(error.response && error.response.data ? error.response.data : error))
//   }
// }

// export default function* () {
//   yield takeLatest(Types.GET_CHURCHES, fetchChurch);
// }
