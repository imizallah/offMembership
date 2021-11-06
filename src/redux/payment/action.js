// eslint-disable-next-line import/no-cycle
import {


GET_USER_TRANSACTION,
GET_USER_TRANSACTION_FAILED,
GET_USER_TRANSACTION_SUCCESS

} from '../actions';



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
