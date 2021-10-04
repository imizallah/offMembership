// eslint-disable-next-line import/no-cycle
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  CHECK_PASSWORD_TOKEN,
  CHECK_PASSWORD_TOKEN_SUCCESS,
  CHECK_PASSWORD_TOKEN_ERROR,
  VERIFY_PHONE,
  VERIFY_PHONE_TOKEN,
  VERIFY_PHONE_SUCCESS,
  VERIFY_PHONE_ERROR,
  VERIFY_PHONE_TOKEN_SUCCESS,
  VERIFY_PHONE_TOKEN_ERROR
} from '../actions';

export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history },
});
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});
export const loginUserError = (message) => ({
  type: LOGIN_USER_ERROR,
  payload: { message },
});

export const forgotPassword = (forgotUserMail, history) => ({
  type: FORGOT_PASSWORD,
  payload: { forgotUserMail, history },
});
export const forgotPasswordSuccess = (forgotUserMail) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: forgotUserMail,
});
export const forgotPasswordError = (message) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: { message },
});

export const resetPassword = ({ resetPasswordCode, newPassword, history }) => ({
  type: RESET_PASSWORD,
  payload: { resetPasswordCode, newPassword, history },
});
export const resetPasswordSuccess = (newPassword) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: newPassword,
});
export const resetPasswordError = (message) => ({
  type: RESET_PASSWORD_ERROR,
  payload: { message },
});

export const checkPasswordToken = (token,history) => ({
  type: CHECK_PASSWORD_TOKEN,
  payload: {token,history},
});

export const checkPasswordTokenSuccess = (message) => ({
  type: CHECK_PASSWORD_TOKEN_SUCCESS,
  payload: message,
});
export const checkPasswordTokenError = (error) => ({
  type: CHECK_PASSWORD_TOKEN_ERROR,
  payload: error ,
});


export const registerUser = (data, history) => ({
  type: REGISTER_USER,
  payload: { data, history },
});
export const registerUserSuccess = (message) => ({
  type: REGISTER_USER_SUCCESS,
  payload:message,
});
export const registerUserError = (error) => ({
  type: REGISTER_USER_ERROR,
  payload: error,
});

export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload: { history },
});

export const verifyPhone=(phone,history)=>({
  type:VERIFY_PHONE,
  payload:{phone,history}
})

export const verifyPhoneSuccess=(message)=>({
  type:VERIFY_PHONE_SUCCESS,
  payload:message
})

export const verifyPhoneError = (error) => ({
  type: VERIFY_PHONE_ERROR,
  payload:error
});

export const verifyPhoneToken = (token,history) => ({
  type: VERIFY_PHONE_TOKEN,
  payload: {token,history},
});


export const verifyPhoneTokenSuccess = (message) => ({
  type: VERIFY_PHONE_TOKEN_SUCCESS,
  payload: message,
});
export const verifyPhoneTokenError = (error) => ({
  type: VERIFY_PHONE_TOKEN_ERROR,
  payload: error ,
});

