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


const init = {
    loading: false,
    error: false,
    message: null,
    transactions: [],
    verified: false,
    paymentURL: null,
    fundingVerified: false,
}

const PaymentReducer = (state = init, action) => {
    const { type, payload } = action
    switch (type) {

        case GET_USER_TRANSACTION:
            return { ...state, loading: true }
        case GET_USER_TRANSACTION_SUCCESS:
            return { ...state, loading: false, message: payload, error: '', transactions: payload.data.reverse() }
        case GET_USER_TRANSACTION_FAILED:
            return { ...state, loading: false, message: '', error: payload }


        case INITIATE_PAYMENT_REQUEST:
            return { ...state, createLoading: true }
        case INITIATE_PAYMENT_SUCCESS:
            return { ...state, createLoading: false, message: payload.message, paymentURL: payload.data, error: '' }
        case INITIATE_PAYMENT_FAILED:
            return { ...state, createLoading: false, error: payload, message: '' }


        case VERIFY_PAYMENT_REQUEST:
            return { ...state, loading: true }
        case VERIFY_PAYMENT_SUCCESS:
            return { ...state, loading: false, message: payload.message, verified: payload.message.toLowerCase(), error: '' }
        case VERIFY_PAYMENT_FAILED:
            return { ...state, loading: false, error: payload, message: '' }


        case ACCOUNT_FUNDING_REQUEST:
            return { ...state, createLoading: true }
        case ACCOUNT_FUNDING_SUCCESS:
            return { ...state, createLoading: false, message: payload.message, paymentURL: payload.data, error: '' }
        case ACCOUNT_FUNDING_FAILED:
            return { ...state, createLoading: false, error: payload, message: '' }


        case VERIFY_FUNDING_REQUEST:
            return { ...state, loading: true }
        case VERIFY_FUNDING_SUCCESS:
            return { ...state, loading: false, message: payload.message, verified: payload.data, error: '' }
        case VERIFY_FUNDING_FAILED:
            return { ...state, loading: false, error: payload, message: '' }


        default:
            return { ...state };


    }
}

export default PaymentReducer