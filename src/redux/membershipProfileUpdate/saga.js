// eslint-disable-next-line import/no-cycle
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'helpers/axios';
import { getCurrentUser } from 'helpers/Utils';

import {
    UPDATE_ADVERTISER,
    UPDATE_CUSTOMER,
    UPDATE_VENDOR,
    UPDATE_EVP,
    UPDATE_SEVP,
    updateAdvertiserSuccess,
    updateAdvertiserFailed,
    updateCustomerSuccess,
    updateCustomerFailed,
    updateVendorSuccess,
    updateVendorFailed,
    updateEVPSuccess,
    updateEVPFailed,
    updateSEVPSuccess,
    updateSEVPFailed,
} from '../actions';





function* updateAdvertiser(payload) {

    const currentUser = getCurrentUser();
    const { phoneNumber } = currentUser
    //    yield console.log({...payload.payload.data, phoneNumber})
    try {
        const response = yield axios.post('profile/advertiser', { ...payload.payload.data, phoneNumber })
        if (response.data.success) {
            yield put(updateAdvertiserSuccess(response.data.message))
        } else {
            yield put(updateAdvertiserFailed(response.data.message));
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
        yield put(updateAdvertiserFailed(message));
    }
}

function* updateCustomer(payload) {

    const currentUser = getCurrentUser();
    const { phoneNumber } = currentUser
    //    yield console.log({...payload.payload.data, phoneNumber})
    try {
        const response = yield axios.post('profile/customer', { ...payload.payload.data, phoneNumber })
        console.log(response)
        if (response.data.success) {
            yield put(updateCustomerSuccess(response.data.message))
        } else {
            yield put(updateCustomerFailed(response.data.message));
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
        yield put(updateCustomerFailed(message));
    }
}


function* updateVendor(payload) {

    const currentUser = getCurrentUser();
    const { phoneNumber } = currentUser
    yield console.log({ ...payload.payload.data, phoneNumber })
    try {
        const response = yield axios.post('profile/vendor', { ...payload.payload.data, phoneNumber })
        if (response.data.success) {
            yield put(updateVendorSuccess(response.data.message))
        } else {
            yield put(updateVendorFailed(response.data.message));
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
        yield put(updateVendorFailed(message));
    }
}


function* updateEVP(payload) {

    const currentUser = getCurrentUser();
    const { phoneNumber } = currentUser
    //    yield console.log({...payload.payload.data, phoneNumber})
    try {
        const response = yield axios.post('profile/evp', { ...payload.payload.data, phoneNumber })
        if (response.data.success) {
            yield put(updateEVPSuccess(response.data.message))
        } else {
            yield put(updateEVPFailed(response.data.message));
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
        yield put(updateEVPFailed(message));
    }
}



function* updateSEVP(payload) {

    const currentUser = getCurrentUser();
    const {phoneNumber}=currentUser
    yield console.log(payload.payload.data)
   
    try {
        const response = yield axios.post('/profile/superevp', {...payload.payload.data, phoneNumber})
        if (response.data.success) {
            yield put(updateSEVPSuccess(response.data.message))
        } else {
            yield put(updateSEVPFailed(response.data.message));
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
        yield put(updateSEVPFailed(message));
    }
}



export function* watchUpdateAdvertiser() {
    yield takeEvery(UPDATE_ADVERTISER, updateAdvertiser);
}
export function* watchUpdateCustomer() {
    yield takeEvery(UPDATE_CUSTOMER, updateCustomer);
}
export function* watchUpdateVendor() {
    yield takeEvery(UPDATE_VENDOR, updateVendor);
}
export function* watchUpdateEVP() {
    yield takeEvery(UPDATE_EVP, updateEVP);
}
export function* watchUpdateSEVP() {
    yield takeEvery(UPDATE_SEVP, updateSEVP);
}

export default function* rootSaga() {
    yield all([
        fork(watchUpdateAdvertiser),
        fork(watchUpdateCustomer),
        fork(watchUpdateVendor),
        fork(watchUpdateEVP),
        fork(watchUpdateSEVP),
    ]);
}