import { all } from 'redux-saga/effects';
import favorites from './favorites';


export default function* rootSaga() {
  yield all([favorites()]);
}
