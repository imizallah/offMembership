import { getCurrentUser } from 'helpers/Utils';
import { isAuthGuardActive, currentUser } from 'constants/defaultValues';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  CHECK_PASSWORD_TOKEN,
  CHECK_PASSWORD_TOKEN_SUCCESS,
  CHECK_PASSWORD_TOKEN_ERROR,
  VERIFY_PHONE_TOKEN,
  VERIFY_PHONE_TOKEN_SUCCESS,
  VERIFY_PHONE_TOKEN_ERROR,
  VERIFY_PHONE,
  VERIFY_PHONE_SUCCESS,
  VERIFY_PHONE_ERROR,
} from '../actions';

const INIT_STATE = {
  currentUser: isAuthGuardActive ? currentUser : getCurrentUser(),
  newPassword: '',
  resetPasswordCode: '',
  loading: false,
  error: '',
  message: '',
};

export default (state = INIT_STATE, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload.data.user,
        message: action.payload.message,
        error: ''
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    case FORGOT_PASSWORD:
      return { ...state, loading: true, error: '' };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    case CHECK_PASSWORD_TOKEN:
      return { ...state, loading: true, error: '', message: '' };
    case CHECK_PASSWORD_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        message: action.payload
      };
    case CHECK_PASSWORD_TOKEN_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload,
        message: ""
      };
    case RESET_PASSWORD:
      return { ...state, loading: true, error: '' };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    case VERIFY_PHONE:
      return { ...state, loading: true, error: '', message: "" };
    case VERIFY_PHONE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        message: action.payload,
      };
    case VERIFY_PHONE_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload,
      };
    case VERIFY_PHONE_TOKEN:
      return { ...state, loading: true, error: '', message: '' };
    case VERIFY_PHONE_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        message: action.payload
      };
    case VERIFY_PHONE_TOKEN_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload,
        message: ""
      };
    case LOGOUT_USER:
      return { ...state, currentUser: null, error: '', message: null };
    default:
      return { ...state };
  }
};
