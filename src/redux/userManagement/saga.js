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
    CREATE_USER_REQUEST,
    VERIFY_USER_REQUEST,
    CREATE_ADVERTISER,
    CREATE_CUSTOMER,
    CREATE_VENDOR,
    CREATE_EVP,
    CREATE_SUPEREVP,
    createAdvertiserSuccess,
    createAdvertiserFailed,
    createCustomerSuccess,
    createCustomerFailed,
    createVendorSuccess,
    createVendorFailed,
    createEVPSuccess,
    createEVPFailed,
    createSuperEVPSuccess,
    createSuperEVPFailed,
    getUserSuccess,
    getUserFailed,
    getSingleUserSuccess,
    getSingleUserFailed,
    getUserProfileSuccess,
    getUserProfileFailed,
    saveEVPSettingsFailed,
    saveEVPSettingsSuccess,
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
    getSettingsSuccess,
    createUserSuccess,
    createUserFailed,
    verifyUserSuccess,
    verifyUserFailed

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
    const { membershipId, categories } = payload.payload.formData;
    try {
        const response = yield axios.post(`/settings/evp?membershipId=${membershipId}`, categories)
    console.log(response.data)
    if (response.data.success) {
        yield put(saveEVPSettingsSuccess(response.data))
        window.location.reload();
    } else {
        yield put(saveEVPSettingsFailed(response.data.message));
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
    yield put(saveEVPSettingsFailed(message));
}
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


function* createUser(payload) {
    yield console.log(payload.payload.data);
    try {
        const response = yield axios.post(`/auth/evp-superevp/register`, payload.payload.data)
        console.log(response.data)
        if (response.data.success) {
            yield put(createUserSuccess(response.data))
            // window.location.reload();
        } else {
            yield put(createUserFailed(response.data.message));
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
        yield put(createUserFailed(message));
    }
}


function* verifyUser(payload) {
    yield console.log(payload.payload.data);
    try {
        const response = yield axios.post('/auth/verify-token', { token: payload.payload.data });
        console.log(response.data)
        if (response.data.success) {
            yield put(verifyUserSuccess(response.data))
            // window.location.reload();
        } else {
            yield put(verifyUserFailed(response.data.message));
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
        yield put(verifyUserFailed(message));
    }
}

function* createAdvertiser(payload) {
    console.log(payload.payload.data);
    //    yield console.log({...payload.payload.data, phoneNumber})
    try {
        const response = yield axios.post('/profile/evp-superevp/advertiser', payload.payload.data)
        if (response.data.success) {
            yield put(createAdvertiserSuccess(response.data.message))
            window.location.reload()
        } else {
            yield put(createAdvertiserFailed(response.data.message));
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
                    message = error.response.data.message;
                    break;
                default:
                    message = error.response.data.message;
            }
        }
        else if (error.message) {
            message = error.message;
        }
        yield put(createAdvertiserFailed(message));
    }
}

function* createCustomer(payload) {
    //    yield console.log({...payload.payload.data, phoneNumber})
    try {
        const response = yield axios.post('/profile/evp-superevp/customer', payload.payload.data)
        console.log(response)
        if (response.data.success) {
            yield put(createCustomerSuccess(response.data.message))
            window.location.reload()
        } else {
            yield put(createCustomerFailed(response.data.message));
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
        yield put(createCustomerFailed(message));
    }
}


function* createVendor(payload) {

    yield console.log(payload.payload.data)
    try {
        const response = yield axios.post('/profile/evp-superevp/vendor', payload.payload.data)
        if (response.data.success) {
            yield put(createVendorSuccess(response.data.message))
            window.location.reload()


        } else {
            yield put(createVendorFailed(response.data.message));
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
        yield put(createVendorFailed(message));
    }
}


function* createEVP(payload) {
    //    yield console.log({...payload.payload.data, phoneNumber})
    try {
        const response = yield axios.post('/profile/evp-superevp/evp', payload.payload.data)
        if (response.data.success) {
            yield put(createEVPSuccess(response.data.message))
            window.location.reload()

        } else {
            yield put(createEVPFailed(response.data.message));
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
        yield put(createEVPFailed(message));
    }
}



function* createSuperEVP(payload) {
    yield console.log(payload.payload.data)

    try {
        const response = yield axios.post('/profile/evp-superevp/superevp', payload.payload.data)
        if (response.data.success) {
            yield put(createSuperEVPSuccess(response.data.message))
            window.location.reload()


        } else {
            yield put(createSuperEVPFailed(response.data.message));
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
        yield put(createSuperEVPFailed(message));
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

export function* watchCreateUser() {
    yield takeEvery(CREATE_USER_REQUEST, createUser);
}
export function* watchVerifyUser() {
    yield takeEvery(VERIFY_USER_REQUEST, verifyUser);
}

export function* watchCreateAdvertiser() {
    yield takeEvery(CREATE_ADVERTISER, createAdvertiser);
}
export function* watchCreateCustomer() {
    yield takeEvery(CREATE_CUSTOMER, createCustomer);
}
export function* watchCreateVendor() {
    yield takeEvery(CREATE_VENDOR, createVendor);
}
export function* watchCreateEVP() {
    yield takeEvery(CREATE_EVP, createEVP);
}
export function* watchCreateSuperEVP() {
    yield takeEvery(CREATE_SUPEREVP, createSuperEVP);
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
        fork(watchGetSettings),
        fork(watchCreateUser),
        fork(watchVerifyUser),
        fork(watchCreateAdvertiser),
        fork(watchCreateCustomer),
        fork(watchCreateVendor),
        fork(watchCreateEVP),
        fork(watchCreateSuperEVP),
    ]);
}