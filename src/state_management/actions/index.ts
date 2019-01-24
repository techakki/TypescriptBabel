import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
	SIGN_UP_FAIL
} from '../constants';

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

type SignUpFailedAction = {
  type: string
}

export const signUp = (payload: signUpData): SignUpAction => {
  return {
    type: SIGN_UP,
    payload: payload
  };
};

export const signUpSuccess = (token: string): SignUpSuccessAction => {
  return {
    type: SIGN_UP_SUCCESS,
    token: token
  };
};

export const signUpFailed = (): SignUpFailedAction => {
  return {
    type: SIGN_UP_FAIL
  };
};

export default {
  signUp,
  signUpSuccess,
  signUpFailed
};
