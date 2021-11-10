// eslint-disable-next-line import/no-cycle
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'helpers/axios';
import {

    GET_USER,
    GET_SINGLE_USER,
    GET_USER_PROFILE,
    EVP_SETTINGS_REQUEST,
    SEVP_SETTINGS_REQUEST,
    VENDOR_SETTINGS_REQUEST,
    CUSTOMER_SETTINGS_REQUEST,
    ADVERTISER_SETTINGS_REQUEST,
    ADVERTS_SETTINGS_REQUEST,
    GET_SETTINGS_REQUEST,
    getUserSuccess,
    getUserFailed,
    getSingleUserSuccess,
    getSingleUserFailed,
    getUserProfileSuccess,
    getUserProfileFailed,
    // saveEVPSettingsFailed,
    // saveEVPSettingsSuccess,
    saveSEVPSettingsFailed,
    saveSEVPSettingsSuccess,
    saveVendorSettingsFailed,
    saveVendorSettingsSuccess,
    saveCustomerSettingsFailed,
    saveCustomerSettingsSuccess,
    saveAdvertiserSettingsFailed,
    saveAdvertiserSettingsSuccess,
    saveAdvertsSettingsFailed,
    saveAdvertsSettingsSuccess,
    getSettingsFailed,
    getSettingsSuccess

} from '../actions';


function* getUser() {
    try {
        const response = yield axios.get(`analytics/all-users`)
        console.log(response.data)
        if (response.data.success) {
            yield put(getUserSuccess(response.data))
            // window.location.reload();
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
            yield put(getSingleUserSuccess(response.data))
            // window.location.reload();
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
            yield put(getUserProfileSuccess(response.data))
            // window.location.reload();
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


function* saveEVPSettings(payload) {
    yield console.log(payload.payload.formData)


    // try {
    //     const response = yield axios.post(`/user/view-profile`,{formData})
    //     console.log(response.data)
    //     if (response.data.success) {
    //         yield put(saveEVPSettingsSuccess(response.data))
    window.location.reload();
    //     } else {
    //         yield put(saveEVPSettingsFailed(response.data.message));
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
    //     yield put(saveEVPSettingsFailed(message));
    // }
}

function* saveSEVPSettings(payload) {
    yield console.log(payload.payload.formData)
    const { membershipId, superEVPAmount,
        superEVPProfit } = payload.payload.formData;


    try {
        const response = yield axios.patch(`/settings/superevp?membershipId=${membershipId}`,
            {
                "startingCredit": superEVPAmount,
                "percentageProfit": superEVPProfit
            })
        console.log(response.data)
        if (response.data.success) {
            yield put(saveSEVPSettingsSuccess(response.data))
            window.location.reload();
        } else {
            yield put(saveSEVPSettingsFailed(response.data.message));
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
        yield put(saveSEVPSettingsFailed(message));
    }
}

function* saveVendorSettings(payload) {
    yield console.log(payload.payload.formData)
    const { membershipId, vendorAmount,
        vendorDuration } = payload.payload.formData;

    try {
        const response = yield axios.patch(`settings/vendor?membershipId=${membershipId}`, {
            "amount": vendorAmount,
            "duration": vendorDuration
        })
        console.log(response.data)
        if (response.data.success) {
            yield put(saveVendorSettingsSuccess(response.data))
            window.location.reload();
        } else {
            yield put(saveVendorSettingsFailed(response.data.message));
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
        yield put(saveVendorSettingsFailed(message));
    }
}

function* saveCustomerSettings(payload) {
    yield console.log(payload.payload.formData)
    const { membershipId, customerAmount,
        customerDuration } = payload.payload.formData;

    try {
        const response = yield axios.patch(`settings/customer?membershipId=${membershipId}`, {
            "amount": customerAmount,
            "duration": customerDuration
        })
        console.log(response.data)
        if (response.data.success) {
            yield put(saveCustomerSettingsSuccess(response.data))
            window.location.reload();
        } else {
            yield put(saveCustomerSettingsFailed(response.data.message));
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
        yield put(saveCustomerSettingsFailed(message));
    }
}

function* saveAdvertiserSettings(payload) {
    yield console.log(payload.payload.formData)
    const { membershipId, advertiserAmount,
        advertiserDuration } = payload.payload.formData;

    try {
        const response = yield axios.put(`settings/advertiser?membershipId=${membershipId}`, {
            "amount": advertiserAmount,
            "duration": advertiserDuration
        })
        console.log(response.data)
        if (response.data.success) {
            yield put(saveAdvertiserSettingsSuccess(response.data))
            window.location.reload();
        } else {
            yield put(saveAdvertiserSettingsFailed(response.data.message));
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
        yield put(saveAdvertiserSettingsFailed(message));
    }
}

function* saveAdvertsSettings(payload) {
    // yield console.log(payload.payload.formData)
    // const { advertAmount } = payload.payload.formData;
    try {
        const response = yield axios.put(`/settings/advert-amount`, { amount: payload.payload.formData })
        console.log(response.data)
        if (response.data.success) {
            yield put(saveAdvertsSettingsSuccess(response.data))
            window.location.reload();
        } else {
            yield put(saveAdvertsSettingsFailed(response.data.message));
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
        yield put(saveAdvertsSettingsFailed(message));
    }
}

function* getSettings() {
    try {
        const response = yield axios.get(`/settings/all`)
        console.log(response.data)
        if (response.data.success) {
            yield put(getSettingsSuccess(response.data))
        } else {
            yield put(getSettingsFailed(response.data.message));
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
        yield put(getSettingsFailed(message));
    }
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

export function* watchEVPSaveSettings() {
    yield takeEvery(EVP_SETTINGS_REQUEST, saveEVPSettings);
}
export function* watchSEVPSaveSettings() {
    yield takeEvery(SEVP_SETTINGS_REQUEST, saveSEVPSettings);
}
export function* watchVendorSaveSettings() {
    yield takeEvery(VENDOR_SETTINGS_REQUEST, saveVendorSettings);
}
export function* watchCustomerSaveSettings() {
    yield takeEvery(CUSTOMER_SETTINGS_REQUEST, saveCustomerSettings);
}
export function* watchAdvertiserSaveSettings() {
    yield takeEvery(ADVERTISER_SETTINGS_REQUEST, saveAdvertiserSettings);
}
export function* watchAdvertsSaveSettings() {
    yield takeEvery(ADVERTS_SETTINGS_REQUEST, saveAdvertsSettings);
}
export function* watchGetSettings() {
    yield takeEvery(GET_SETTINGS_REQUEST, getSettings);
}


export default function* rootSaga() {
    yield all([
        fork(watchGetUser),
        fork(watchGetSingleUser),
        fork(watchGetUserProfile),
        fork(watchEVPSaveSettings),
        fork(watchSEVPSaveSettings),
        fork(watchVendorSaveSettings),
        fork(watchAdvertsSaveSettings),
        fork(watchCustomerSaveSettings),
        fork(watchAdvertiserSaveSettings),
        fork(watchAdvertsSaveSettings),
        fork(watchGetSettings)
    ]);
}