// eslint-disable-next-line import/no-cycle
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'helpers/axios';
import {

    GET_USER_TRANSACTION,
    INITIATE_PAYMENT_REQUEST,
    VERIFY_PAYMENT_REQUEST,
    ACCOUNT_FUNDING_REQUEST,
    VERIFY_FUNDING_REQUEST,
    getUserTransactionSuccess,
    getUserTransactionFailed,
    initiatePaymentSuccess,
    initiatePaymentFailed,
    verifyPaymentFailed,
    verifyPaymentSuccess,
    fundAccountFailed,
    fundAccountSuccess,
    verifyFundingSuccess,
    verifyFundingFailed

} from '../actions';


function* getUserTransaction() {

    // yield console.log(payload.payload.data);
    try {
        const response = yield axios.get(`/payment/user-transactions`)
        console.log(response.data)
        if (response.data.success) {
            yield put(getUserTransactionSuccess(response.data));
        } else {
            yield put(getUserTransactionFailed(response.data.message));
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
                    message = error.response.data.message;
            }
        }
        else if (error.message) {
            message = error.message;
        }
        yield put(getUserTransactionFailed(message));
    }
}


function* initiatePayment({ payload: { formData } }) {
    console.log(formData);
    try {
        const response = yield axios.post(`payment/initiate-web-payment`, formData)
        console.log(response.data)
        if (response.data.success) {
            yield put(initiatePaymentSuccess(response.data));
        } else {
            yield put(initiatePaymentFailed(response.data.message));
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
                    message = error.response.data.message;
            }
        }
        else if (error.message) {
            message = error.message;
        }
        yield put(initiatePaymentFailed(message));
    }
}


function* verifyPayment({ payload: { formData } }) {
    console.log(formData)
    const {
        tx_ref,
        id
    } = formData
    try {
        const response = yield axios.post(`payment/verify-web-payment`, {
        /* eslint camelcase:0 */
            txRef:tx_ref,
            id
        })
        console.log(response.data)
        if (response.data.success) {
            yield put(verifyPaymentSuccess(response.data));
            window.location.href='/'
        } else {
            yield put(verifyPaymentFailed(response.data.message));
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
                    message = error.response.data.message;
            }
        }
        else if (error.message) {
            message = error.message;
        }
        yield put(verifyPaymentFailed(message));
    }
}


function* fundAccount({ payload: { formData } }) {
    console.log(formData);
    try {
        const response = yield axios.post(`payment/web-account-funding`, formData)
        console.log(response.data)
        if (response.data.success) {
            yield put(fundAccountSuccess(response.data));
        } else {
            yield put(fundAccountFailed(response.data.message));
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
                    message = error.response.data.message;
            }
        }
        else if (error.message) {
            message = error.message;
        }
        yield put(fundAccountFailed(message));
    }
}


function* verifyFunding({ payload: { formData } }) {
    console.log(formData)
    // const {
    //     tx_ref,
    //     id
    // } = formData
    try {
        const response = yield axios.post(`/payment/verify-web-funding`, formData)
        console.log(response.data)
        if (response.data.success) {
            yield put(verifyFundingSuccess(response.data));
            window.location.href='/'
        } else {
            yield put(verifyFundingFailed(response.data.message));
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
                    message = error.response.data.message;
            }
        }
        else if (error.message) {
            message = error.message;
        }
        yield put(verifyFundingFailed(message));
    }
}




function* watchInitiatePayment() {
    yield takeEvery(INITIATE_PAYMENT_REQUEST, initiatePayment)
}

function* watchVerifyPayment() {
    yield takeEvery(VERIFY_PAYMENT_REQUEST, verifyPayment)
}

export function* watchGetUserTransaction() {
    yield takeEvery(GET_USER_TRANSACTION, getUserTransaction);
}

function* watchAccountFunding() {
    yield takeEvery(ACCOUNT_FUNDING_REQUEST, fundAccount)
}

function* watchVerifyFunding() {
    yield takeEvery(VERIFY_FUNDING_REQUEST, verifyFunding)
}



export default function* rootSaga() {
    yield all([
        fork(watchGetUserTransaction),
        fork(watchInitiatePayment),
        fork(watchVerifyPayment),
        fork(watchAccountFunding),
        fork(watchVerifyFunding),

    ]);
}