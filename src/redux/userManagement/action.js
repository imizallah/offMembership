// eslint-disable-next-line import/no-cycle
import {


    GET_USER,
    GET_USER_FAILED,
    GET_USER_SUCCESS,

    GET_USER_PROFILE,
    GET_USER_PROFILE_FAILED,
    GET_USER_PROFILE_SUCCESS,

    GET_SINGLE_USER,
    GET_SINGLE_USER_FAILED,
    GET_SINGLE_USER_SUCCESS,
    
    GET_SETTINGS_REQUEST,
    GET_SETTINGS_REQUEST_FAILED,
    GET_SETTINGS_REQUEST_SUCCESS,

    EVP_SETTINGS_REQUEST,
    EVP_SETTINGS_REQUEST_FAILED,
    EVP_SETTINGS_REQUEST_SUCCESS,

    SEVP_SETTINGS_REQUEST,
    SEVP_SETTINGS_REQUEST_FAILED,
    SEVP_SETTINGS_REQUEST_SUCCESS,

    VENDOR_SETTINGS_REQUEST,
    VENDOR_SETTINGS_REQUEST_FAILED,
    VENDOR_SETTINGS_REQUEST_SUCCESS,

    CUSTOMER_SETTINGS_REQUEST,
    CUSTOMER_SETTINGS_REQUEST_FAILED,
    CUSTOMER_SETTINGS_REQUEST_SUCCESS,

    ADVERTISER_SETTINGS_REQUEST,
    ADVERTISER_SETTINGS_REQUEST_FAILED,
    ADVERTISER_SETTINGS_REQUEST_SUCCESS,

    ADVERTS_SETTINGS_REQUEST,
    ADVERTS_SETTINGS_REQUEST_FAILED,
    ADVERTS_SETTINGS_REQUEST_SUCCESS,


    // GET_USER_TRANSACTION,
    // GET_USER_TRANSACTION_FAILED,
    // GET_USER_TRANSACTION_SUCCESS

} from '../actions';



export const getUser = (data) => ({
    type: GET_USER,
    payload: { data }
})

export const getUserSuccess = (message) => ({
    type: GET_USER_SUCCESS,
    payload: message
})

export const getUserFailed = (message) => ({
    type: GET_USER_FAILED,
    payload: message
})


export const getUserProfile = (data) => ({
    type: GET_USER_PROFILE,
    payload: { data }
})

export const getUserProfileSuccess = (message) => ({
    type: GET_USER_PROFILE_SUCCESS,
    payload: message
})

export const getUserProfileFailed = (message) => ({
    type: GET_USER_PROFILE_FAILED,
    payload: message
})



export const getSingleUser = (id) => ({
    type: GET_SINGLE_USER,
    payload: { id }
})



export const getSingleUserSuccess = (message) => ({
    type: GET_SINGLE_USER_SUCCESS,
    payload: message
})

export const getSingleUserFailed = (message) => ({
    type: GET_SINGLE_USER_FAILED,
    payload: message
})


export const saveEVPSettings = (formData) => ({
    type: EVP_SETTINGS_REQUEST,
    payload: { formData }
})

export const saveEVPSettingsSuccess = (message) => ({
    type: EVP_SETTINGS_REQUEST_SUCCESS,
    payload: message
})

export const saveEVPSettingsFailed = (message) => ({
    type: EVP_SETTINGS_REQUEST_FAILED,
    payload: message
})


export const saveSEVPSettings = (formData) => ({
    type: SEVP_SETTINGS_REQUEST,
    payload: { formData }
})

export const saveSEVPSettingsSuccess = (message) => ({
    type: SEVP_SETTINGS_REQUEST_SUCCESS,
    payload: message
})

export const saveSEVPSettingsFailed = (message) => ({
    type: SEVP_SETTINGS_REQUEST_FAILED,
    payload: message
})



export const saveVendorSettings = (formData) => ({
    type: VENDOR_SETTINGS_REQUEST,
    payload: { formData }
})

export const saveVendorSettingsSuccess = (message) => ({
    type: VENDOR_SETTINGS_REQUEST_SUCCESS,
    payload: message
})

export const saveVendorSettingsFailed = (message) => ({
    type: VENDOR_SETTINGS_REQUEST_FAILED,
    payload: message
})


export const saveCustomerSettings = (formData) => ({
    type: CUSTOMER_SETTINGS_REQUEST,
    payload: { formData }
})

export const saveCustomerSettingsSuccess = (message) => ({
    type: CUSTOMER_SETTINGS_REQUEST_SUCCESS,
    payload: message
})

export const saveCustomerSettingsFailed = (message) => ({
    type: CUSTOMER_SETTINGS_REQUEST_FAILED,
    payload: message
})


export const saveAdvertiserSettings = (formData) => ({
    type: ADVERTISER_SETTINGS_REQUEST,
    payload: { formData }
})

export const saveAdvertiserSettingsSuccess = (message) => ({
    type: ADVERTISER_SETTINGS_REQUEST_SUCCESS,
    payload: message
})

export const saveAdvertiserSettingsFailed = (message) => ({
    type: ADVERTISER_SETTINGS_REQUEST_FAILED,
    payload: message
})


export const saveAdvertsSettings = (formData) => ({
    type: ADVERTS_SETTINGS_REQUEST,
    payload: { formData }
})

export const saveAdvertsSettingsSuccess = (message) => ({
    type: ADVERTS_SETTINGS_REQUEST_SUCCESS,
    payload: message
})

export const saveAdvertsSettingsFailed = (message) => ({
    type: ADVERTS_SETTINGS_REQUEST_FAILED,
    payload: message
})




export const getSettings = () => ({
    type:GET_SETTINGS_REQUEST,
})

export const getSettingsSuccess = (message) => ({
    type:GET_SETTINGS_REQUEST_SUCCESS,
    payload: message
})

export const getSettingsFailed = (message) => ({
    type:GET_SETTINGS_REQUEST_FAILED,
    payload: message
})
