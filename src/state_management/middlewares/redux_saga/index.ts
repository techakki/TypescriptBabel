import {
  call,
  put,
  takeEvery,
  all
} from 'redux-saga/effects';
import { signUpFailed, signUpSuccess } from '../../actions';
import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL
} from '../../constants';
import { signUp, dummyRequest } from '../../../API/sign_up';

type signUpData = {
  email: string,
  password: string
};

type SignUpAction = {
  type: string,
  payload: signUpData
};

type SignUpSuccessAction = {
  type: string,
  token: string
};

function* handleSignUp(action: SignUpAction): {} {
  try {
    const token: string = yield call(signUp, action.payload);
    yield put(signUpSuccess(token));
  } catch {
    yield put(signUpFailed());
  }
}

function* onSignUpSuccess(action: SignUpSuccessAction): {} {
  yield call(dummyRequest, action.token);
}

function* watchActions(): {} {
  yield takeEvery(SIGN_UP, signUp);
  yield takeEvery(SIGN_UP_SUCCESS, onSignUpSuccess);
}

export default function* rootSaga(): {} {
    yield all([
        watchActions()
    ]);
}
