import {takeEvery} from 'redux-saga/effects';
import {USER_LIST} from './constants';

function* userList() {
  console.warn('saga function is called');
}

function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;
