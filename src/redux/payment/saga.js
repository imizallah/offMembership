// eslint-disable-next-line import/no-cycle
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'helpers/axios';
import {

    GET_USER_TRANSACTION,
    getUserTransactionSuccess,
    getUserTransactionFailed
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



export function* watchGetUserTransaction() {
    yield takeEvery(GET_USER_TRANSACTION, getUserTransaction);
}


export default function* rootSaga() {
    yield all([
        fork(watchGetUserTransaction)
    ]);
}