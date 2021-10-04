import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { setCurrentUser } from 'helpers/Utils';
import axios from 'helpers/axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  VERIFY_PHONE,
  VERIFY_PHONE_TOKEN,
  CHECK_PASSWORD_TOKEN,
} from '../actions';

import {
  loginUserSuccess,
  loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
  checkPasswordTokenSuccess,
  checkPasswordTokenError,
  verifyPhoneSuccess,
  verifyPhoneError,
  verifyPhoneTokenSuccess,
  verifyPhoneTokenError
} from './actions';



function* verifyPhone({ payload }) {
  const { email } = payload.email;
  const { history } = payload;
  yield console.log(email, history)
  try {
    const response = yield axios.post('/auth/send-token', { email });
    console.log(response);
    if (response.data.success) {
      yield put(verifyPhoneSuccess(response.data.message));
      history.push('/auth/verify-email-token');

    } else {
      yield put(verifyPhoneError(response.data.message));
    }
  } catch (error) {
    let message;
    if (error.response) {
      message = error.response.data.message
    }
    else if (error.message) {
      message = error.message;
    }
    console.log(message);
    yield put(verifyPhoneError(message));
  }
}

function* verifyPhoneToken({ payload }) {
  const { token, history } = payload;
  console.log(token, history)

  try {
    const response = yield axios.post('/auth/verify-token', { token });
    console.log(response);
    if (response.data.success) {
      yield put(verifyPhoneTokenSuccess(response.data.message));
      history.push(`/auth/login`);
    } else {
      yield put(verifyPhoneTokenError(response.data.message));
    }
  } catch (error) {
    console.log(error.response);
    let message;
    if (error.response) {
      switch (error.response.status) {
        case 500:
          message = 'Internal Server Error';
          break;
        case 404:
          message = 'Not found';
          break;
        case 401:
          message = 'Invalid credentials';
          break;
        default:
          message = error.response.data.message
      }
    }
    else if (error.message) {
      message = error.message;
    }
    yield put(verifyPhoneTokenError(message));
  }
}

function* registerUser({ payload }) {
  const { history, data } = payload;
  console.log(data);
  try {
    const response = yield axios.post(`/auth/register`, data)
    if (response.data.success) {
      yield put(registerUserSuccess(response.data.message));
      history.push(`/auth/verify-token`);
    } else {
      yield put(registerUserError(response.data.message));
    }
  } catch (error) {
    console.log(error)
    console.log(error.response)
    let message;
    if (error.response) {
      switch (error.response.status) {
        case 500:
          message = 'Internal Server Error';
          break;
        case 404:
          message = 'Not found';
          break;
        case 401:
          message = 'Invalid credentials';
          break;
        default:
          message = 'Operation failed. Try again later...';
      }
    }
    else if (error.message) {
      message = error.message;
    }
    console.log(message)
    yield put(registerUserError(message));
  }
}

function* loginWithEmailPassword({ payload }) {
  const { history } = payload;
 
  try {
    const response = yield axios.post('/auth/login', payload.user);
    console.log(response.data);
    if (response.data.success) {
      setCurrentUser(response.data.data)
      yield put(loginUserSuccess(response.data));
          history.push('/app');
          yield put(loginUserError(response.data.message));
      }  else {
      yield put(loginUserError(response.data.message));
    }
  } catch (error) {
    console.log(error.response.data.message)
          // const {message} = erroresponse.data;
          let message;
    if (error.response) {
      message=error.response.data.message;
      // switch (error.response.status) {
      //   case 500:
      //     message = 'Internal Server Error';
      //     break;
      //   case 404:
      //     message = error.response.data.message;
      //     break;
      //   case 401:
      //     message = 'Invalid credentials';
      //     break;
      //   default:  
      //       message= 'Login failed. Try again later...'
    // }
  } else if (error.message) {
      message =  'Login failed. Try again later...';
    }
    yield put(loginUserError(message));
  }
}

function* forgotPassword({ payload }) {
  const { email } = payload.email;
  const { history } = payload;
  yield console.log(email, history)
  try {
    const response = yield axios.post('/auth/reset-password', { email });
    console.log(response);
    if (response.data.success) {
      yield put(forgotPasswordSuccess(response.data.message));
      history.push('/auth/check-password-token');

    } else {
      yield put(forgotPasswordError(response.data.message));
    }
  } catch (error) {
    console.log(error);
    let message;
    if (error.response) {
      message = error.response.data.message
    }
    else if (error.message) {
      message = error.message;
    }
    console.log(message);
    yield put(forgotPasswordError(message));
  }
}

function* checkPasswordToken({ payload }) {
  const { token, history } = payload;
  console.log(token)

  try {
    const response = yield axios.post('/auth/check-password-token/', token);
    console.log(response);
    if (response.data.success) {
      yield put(checkPasswordTokenSuccess(response.data.message));
      history.push(`/auth/reset-password/${token.token}`);
    } else {
      yield put(checkPasswordTokenError(response.data.message));
    }
  } catch (error) {
    console.log(error.response);
    let message;
    if (error.response) {
      switch (error.response.status) {
        case 500:
          message = 'Internal Server Error';
          break;
        case 404:
          message = 'Not found';
          break;
        case 401:
          message = 'Invalid credentials';
          break;
        default:
          message = error.response.data.message
      }
    }
    else if (error.message) {
      message = error.message;
    }
    yield put(checkPasswordTokenError(message));
  }
}

function* resetPassword({ payload }) {
  const { password, history, token } = payload;
  console.log(password);
  try {
    const response = yield axios.post(`/auth/change-password/${token}`, { password });
    console.log(response);
    if (response.data.success) {
      yield put(resetPasswordSuccess(response.data.message));
      history.push('/auth/login');

    } else {
      yield put(resetPasswordError(response.data.message));
    }
  } catch (error) {
    let message;
    if (error.response) {
      message = error.response.data.message
    }
    else if (error.message) {
      message = error.message;
    }
    console.log(message);
    yield put(resetPasswordError(message));
  }
}



function* logout({ payload }) {
  const { history } = payload;
  yield setCurrentUser();
  history.push('/app');
}



export function* watchVerifyPhone() {

  yield takeEvery(VERIFY_PHONE, verifyPhone);
}

export function* watchVerifyPhoneToken() {

  yield takeEvery(VERIFY_PHONE_TOKEN, verifyPhoneToken);
}

export function* watchRegisterUser() {

  yield takeEvery(REGISTER_USER, registerUser);
}


export function* watchLoginUser() {

  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export function* watchLogoutUser() {

  yield takeEvery(LOGOUT_USER, logout);
}

export function* watchResetPassword() {

  yield takeEvery(RESET_PASSWORD, resetPassword);
}

export function* watchForgotPassword() {

  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

export function* watchCheckPasswordToken() {

  yield takeEvery(CHECK_PASSWORD_TOKEN, checkPasswordToken);
}



export default function* rootSaga() {
  yield all([
    fork(watchVerifyPhone),
    fork(watchVerifyPhoneToken),
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
    fork(watchCheckPasswordToken),
  ]);
}
