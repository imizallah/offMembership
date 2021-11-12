// eslint-disable-next-line import/no-cycle
import { all, fork, put, call, takeEvery } from 'redux-saga/effects';
import axios from 'helpers/axios';
import {
    CREATE_ADVERT,
    EDIT_ADVERT,
    DELETE_ADVERT,
    GET_ADVERT,
    GET_USER_ADVERT,
    // getUserProfile,
    createAdvertSuccess,
    createAdvertFailed,
    updateAdvertSuccess,
    updateAdvertFailed,
    deleteAdvertSuccess,
    deleteAdvertFailed,
    getAdvertSucces,
    getAdvertFailed,
    getUserAdvertSucces,
    getUserAdvertFailed
} from '../actions';


function* getAdvert() {

    try {
        const response = yield axios.get(`/advert/all-adverts`)
        console.log(response.data)
        if (response.data.success) {
            yield put(getAdvertSucces(response.data));
        } else {
            yield put(getAdvertFailed(response.data.message));
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
        yield put(getAdvertFailed(message));
    }
}


function* getUserAdvert() {

    try {
        const response = yield axios.get(`/advert/user-adverts`)
        console.log(response.data)
        if (response.data.success) {
            yield put(getUserAdvertSucces(response.data));
        } else {
            yield put(getUserAdvertFailed(response.data.message));
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
        yield put(getUserAdvertFailed(message));
    }
}


function* createAdvert(payload) {
    //    yield console.log(payload.payload.data)
    try {
        const response = yield axios.post('advert/create', payload.payload.data)
        if (response.data.success) {
            yield put(createAdvertSuccess(response.data.message));
            yield call(getAdvert);
            yield call(getUserAdvert);
            // yield call(getUserProfile)
        } else {
            yield put(createAdvertFailed(response.data.message));
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
        yield put(createAdvertFailed(message));
    }
}

function* updateAdvert(payload) {
   yield console.log(payload);
   const {id,message}=payload.payload
    try {
        const response = yield axios.patch(`advert/update?advertId=${id}`, {message})
        if (response.data.success) {
            yield put(updateAdvertSuccess(response.data.message));
    yield call(getUserAdvert)

        } else {
            yield put(updateAdvertFailed(response.data.message));
        }
    } catch (error) {
        console.log(error.response);
        let errMessage;
        if (error.response) {
            switch (error.response.status) {
                case 500:
                    errMessage = 'Internal Server Error';
                    break;
                case 404:
                    errMessage = 'Not found';
                    break;
                case 401:
                    errMessage = 'Invalid credentials';
                    break;
                default:
                    errMessage = error.response.data.message;
            }
        }
        else if (error.message) {
            errMessage = error.message;
        }
        yield put(updateAdvertFailed(errMessage));
    }
}


function* deleteAdvert(payload) {
   
    try {
        const response = yield axios.delete(`advert/delete?advertId=${payload.payload.id}`)
        if (response.data.success) {
            yield put(deleteAdvertSuccess(response.data.message));
    yield call(getUserAdvert);
        } else {
            yield put(deleteAdvertFailed(response.data.message));
        }
    } catch (error) {
        console.log(error);
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
        yield put(deleteAdvertFailed(message));
    }
}



export function* watchCreateAdvert() {
    yield takeEvery(CREATE_ADVERT, createAdvert);
}

export function* watchEditAdvert() {
    yield takeEvery(EDIT_ADVERT, updateAdvert);
}

export function* watchDeleteAdvert() {
    yield takeEvery(DELETE_ADVERT, deleteAdvert);
}

export function* watchGetAdvert() {
    yield takeEvery(GET_ADVERT, getAdvert);
}

export function* watchGetUserAdvert() {
    yield takeEvery(GET_USER_ADVERT, getUserAdvert);
}

export default function* rootSaga() {
    yield all([
        fork(watchCreateAdvert),
        fork(watchEditAdvert),
        fork(watchDeleteAdvert),
        fork(watchGetAdvert),
        fork(watchGetUserAdvert),
    ]);
}