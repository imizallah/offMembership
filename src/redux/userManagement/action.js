// eslint-disable-next-line import/no-cycle
import {


GET_USER,
GET_USER_FAILED,
GET_USER_SUCCESS,

GET_SINGLE_USER,
GET_SINGLE_USER_FAILED,
GET_SINGLE_USER_SUCCESS,

GET_USER_TRANSACTION,
GET_USER_TRANSACTION_FAILED,
GET_USER_TRANSACTION_SUCCESS

} from '../actions';



export const getUser = (data) => ({
    type: GET_USER,
    payload: { data }
})

export const getUserSuccess = (message) => ({
    type: GET_USER_SUCCESS,
    payload: message
})

export const getUserFailed = (message) => ({
    type: GET_USER_FAILED,
    payload: message
})



export const getSingleUser = (id) => ({
    type:GET_SINGLE_USER,
    payload: { id }
})

export const getSingleUserSuccess = (message) => ({
    type:GET_SINGLE_USER_SUCCESS,
    payload: message
})

export const getSingleUserFailed = (message) => ({
    type:GET_SINGLE_USER_FAILED,
    payload: message
})



export const getUserTransaction = () => ({
    type:GET_USER_TRANSACTION,
})

export const getUserTransactionSuccess = (message) => ({
    type:GET_USER_TRANSACTION_SUCCESS,
    payload: message
})

export const getUserTransactionFailed = (message) => ({
    type:GET_USER_TRANSACTION_FAILED,
    payload: message
})
