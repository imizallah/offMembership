// eslint-disable-next-line import/no-cycle
import {



    GET_USER_TRANSACTION,
    GET_USER_TRANSACTION_FAILED,
    GET_USER_TRANSACTION_SUCCESS

} from '../actions';


const init = {
    loading: false,
    error: false,
    message: null,
    transactions: []
}

const PaymentReducer = (state = init, action) => {
    const { type, payload } = action
    console.log(action);
    switch (type) {

        case GET_USER_TRANSACTION:
            return { ...state, loading: true }
        case GET_USER_TRANSACTION_SUCCESS:
            return { ...state, loading: false, message: payload, error: '', transactions: payload.data}
        case GET_USER_TRANSACTION_FAILED:
            return { ...state, loading: false, message: '', error: payload }

        default:
            return { ...state };


    }
}

export default PaymentReducer