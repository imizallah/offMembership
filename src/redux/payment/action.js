// eslint-disable-next-line import/no-cycle
import {


    GET_USER_TRANSACTION,
    GET_USER_TRANSACTION_FAILED,
    GET_USER_TRANSACTION_SUCCESS,

    INITIATE_PAYMENT_REQUEST,
    INITIATE_PAYMENT_SUCCESS,
    INITIATE_PAYMENT_FAILED,

    VERIFY_PAYMENT_REQUEST,
    VERIFY_PAYMENT_SUCCESS,
    VERIFY_PAYMENT_FAILED,


    ACCOUNT_FUNDING_REQUEST,
    ACCOUNT_FUNDING_SUCCESS,
    ACCOUNT_FUNDING_FAILED,

    VERIFY_FUNDING_REQUEST,
    VERIFY_FUNDING_SUCCESS,
    VERIFY_FUNDING_FAILED



} from '../actions';



export const getUserTransaction = () => ({
    type: GET_USER_TRANSACTION,
})

export const getUserTransactionSuccess = (message) => ({
    type: GET_USER_TRANSACTION_SUCCESS,
    payload: message
})

export const getUserTransactionFailed = (message) => ({
    type: GET_USER_TRANSACTION_FAILED,
    payload: message
})

export const initiatePayment = (formData) => ({
    type: INITIATE_PAYMENT_REQUEST,
    payload: { formData }
})
export const initiatePaymentSuccess = (message) => ({
    type: INITIATE_PAYMENT_SUCCESS,
    payload: message
})
export const initiatePaymentFailed = (error) => ({
    type: INITIATE_PAYMENT_FAILED,
    payload: error
})


export const verifyPayment = (formData) => ({
    type: VERIFY_PAYMENT_REQUEST,
    payload: { formData }
})
export const verifyPaymentSuccess = (message) => ({
    type: VERIFY_PAYMENT_SUCCESS,
    payload: message
})
export const verifyPaymentFailed = (error) => ({
    type: VERIFY_PAYMENT_FAILED,
    payload: error
})

export const fundAccount = (formData) => ({
    type: ACCOUNT_FUNDING_REQUEST,
    payload: { formData }
})
export const fundAccountSuccess = (message) => ({
    type: ACCOUNT_FUNDING_SUCCESS,
    payload: message
})
export const fundAccountFailed = (error) => ({
    type: ACCOUNT_FUNDING_FAILED,
    payload: error
})


export const verifyFunding = (formData) => ({
    type: VERIFY_FUNDING_REQUEST,
    payload: { formData }
})
export const verifyFundingSuccess = (message) => ({
    type: VERIFY_FUNDING_SUCCESS,
    payload: message
})
export const verifyFundingFailed = (error) => ({
    type: VERIFY_FUNDING_FAILED,
    payload: error
})



