// eslint-disable-next-line import/no-cycle
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'helpers/axios';
import {
    CREATE_SEVP,
    GET_SEVP,
    GET_SINGLE_SEVP,

    createSEVPSuccess,
    createSEVPFailed,
    getSEVPSuccess,
    getSEVPFailed,
    getSingleSEVPSuccess,
    getSingleSEVPFailed,
} from '../actions';


function* createSEVP(payload) {
       yield console.log(payload.payload.data)
    try {
        const response = yield axios.post('subevp/create', payload.payload.data)
        console.log(response);
        if (response.data.success) {
            yield put(createSEVPSuccess(response.data.message));
        } else {
            yield put(createSEVPFailed(response.data.message));
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
        yield put(createSEVPFailed(message));
    }
}


function* getSEVP() {
    try {
        const response = yield axios.get(`/subevp/my-subevps`)
        console.log(response.data)
        if (response.data.success) {
            yield put(getSEVPSuccess(response.data));
        } else {
            yield put(getSEVPFailed(response.data.message));
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
        yield put(getSEVPFailed(message));
    }
}


function* getSingleSEVP(payload) {

    // yield console.log(payload.payload.data);
    try {
        const response = yield axios.get(`/subevp/single-subevp?subEvpId=${payload.payload.data}`)
        console.log(response.data)
        if (response.data.success) {
            yield put(getSingleSEVPSuccess(response.data));
        } else {
            yield put(getSingleSEVPFailed(response.data.message));
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
        yield put(getSingleSEVPFailed(message));
    }
}





export function* watchCreateSEVP() {
    yield takeEvery(CREATE_SEVP, createSEVP);
}


export function* watchGetSEVP() {
    yield takeEvery(GET_SEVP, getSEVP);
}

export function* watchGetSingleEVP() {
    yield takeEvery(GET_SINGLE_SEVP, getSingleSEVP);
}

export default function* rootSaga() {
    yield all([
        fork(watchCreateSEVP),
        fork(watchGetSEVP),
        fork(watchGetSingleEVP),
    ]);
}