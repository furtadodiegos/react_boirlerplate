import { all } from 'redux-saga/effects';

// Import all Sagas from app to watch
// import { AuthSagas, AuthTypes } from '../api/auth';

export default function* rootSaga() {
  yield all([
    // takeLatest(AuthTypes.REQUEST, AuthSagas),
  ]);
}
