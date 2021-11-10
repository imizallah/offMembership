// eslint-disable-next-line import/no-cycle
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'helpers/axios';
import {

    GET_USER,
    GET_SINGLE_USER,
    GET_USER_PROFILE,
    SETTINGS_REQUEST,
    getUserSuccess,
    getUserFailed,
    getSingleUserSuccess,
    getSingleUserFailed,
    getUserProfileSuccess,
    getUserProfileFailed,
    // saveSettingsFailed,
    // saveSettingsSuccess
} from '../actions';


function* getUser() {
    try {
        const response = yield axios.get(`analytics/all-users`)
        console.log(response.data)
        if (response.data.success) {
            yield put(getUserSuccess(response.data));
        } else {
            yield put(getUserFailed(response.data.message));
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
        yield put(getUserFailed(message));
    }
}


function* getSingleUser(payload) {

    // yield console.log(payload.payload.data);
    try {
        const response = yield axios.get(`/user-management/single-user?userId=${payload.payload.id}`)
        console.log(response.data)
        if (response.data.success) {
            yield put(getSingleUserSuccess(response.data));
        } else {
            yield put(getSingleUserFailed(response.data.message));
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
        yield put(getSingleUserFailed(message));
    }
}



function* getUserProfile() {

    try {
        const response = yield axios.get(`/user/view-profile`)
        console.log(response.data)
        if (response.data.success) {
            yield put(getUserProfileSuccess(response.data));
        } else {
            yield put(getUserProfileFailed(response.data.message));
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
        yield put(getUserProfileFailed(message));
    }
}


function* saveSettings(payload) {
    yield console.log(payload.payload.formData)


    // try {
    //     const response = yield axios.post(`/user/view-profile`,{formData})
    //     console.log(response.data)
    //     if (response.data.success) {
    //         yield put(saveSettingsSuccess(response.data));
    //     } else {
    //         yield put(saveSettingsFailed(response.data.message));
    //     }
    // } catch (error) {
    //     console.log(error.response);
    //     let message;
    //     if (error.response) {
    //         switch (error.response.status) {
    //             case 500:
    //                 message = 'Internal Server Error';
    //                 break;
    //             case 404:
    //                 message = 'Not found';
    //                 break;
    //             case 401:
    //                 message = 'Invalid credentials';
    //                 break;
    //             default:
    //                 message = error.response.data.message;
    //         }
    //     }
    //     else if (error.message) {
    //         message = error.message;
    //     }
    //     yield put(saveSettingsFailed(message));
    // }
}


export function* watchGetUser() {
    yield takeEvery(GET_USER, getUser);
}

export function* watchGetSingleUser() {
    yield takeEvery(GET_SINGLE_USER, getSingleUser);
}

export function* watchGetUserProfile() {
    yield takeEvery(GET_USER_PROFILE, getUserProfile);
}

export function* watchSaveSettings() {
    yield takeEvery(SETTINGS_REQUEST, saveSettings);
}


export default function* rootSaga() {
    yield all([
        fork(watchGetUser),
        fork(watchGetSingleUser),
        fork(watchGetUserProfile),
        fork(watchSaveSettings)
    ]);
}