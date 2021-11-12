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



    CREATE_USER_REQUEST,
    CREATE_USER_REQUEST_FAILED,
    CREATE_USER_REQUEST_SUCCESS,


    VERIFY_USER_REQUEST,
    VERIFY_USER_REQUEST_FAILED,
    VERIFY_USER_REQUEST_SUCCESS,

    CREATE_ADVERTISER,
    CREATE_ADVERTISER_FAILED,
    CREATE_ADVERTISER_SUCCESS,

    CREATE_CUSTOMER,
    CREATE_CUSTOMER_FAILED,
    CREATE_CUSTOMER_SUCCESS,

    CREATE_VENDOR,
    CREATE_VENDOR_FAILED,
    CREATE_VENDOR_SUCCESS,

    CREATE_EVP,
    CREATE_EVP_FAILED,
    CREATE_EVP_SUCCESS,

    CREATE_SUPEREVP,
    CREATE_SUPEREVP_FAILED,
    CREATE_SUPEREVP_SUCCESS,

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


export const createUser = (data) => ({
    type: CREATE_USER_REQUEST,
    payload: { data }
})

export const createUserSuccess = (data) => ({
    type: CREATE_USER_REQUEST_SUCCESS,
    payload: data
})

export const createUserFailed = (message) => ({
    type: CREATE_USER_REQUEST_FAILED,
    payload: message
})

export const verifyUser = (data) => ({
    type: VERIFY_USER_REQUEST,
    payload: { data }
})

export const verifyUserSuccess = (data) => ({
    type: VERIFY_USER_REQUEST_SUCCESS,
    payload: data
})

export const verifyUserFailed = (message) => ({
    type: VERIFY_USER_REQUEST_FAILED,
    payload: message
})


export const createAdvertiser = (data) => ({
    type: CREATE_ADVERTISER,
    payload: { data }
})

export const createAdvertiserSuccess = (message) => ({
    type: CREATE_ADVERTISER_SUCCESS,
    payload: message
})

export const createAdvertiserFailed = (message) => ({
    type: CREATE_ADVERTISER_FAILED,
    payload: message
})

export const createCustomer = (data) => ({
    type: CREATE_CUSTOMER,
    payload: { data }
})

export const createCustomerSuccess = (message) => ({
    type: CREATE_CUSTOMER_SUCCESS,
    payload: message
})

export const createCustomerFailed = (message) => ({
    type: CREATE_CUSTOMER_FAILED,
    payload: message
})

export const createVendor = (data) => ({
    type: CREATE_VENDOR,
    payload: { data }
})

export const createVendorSuccess = (message) => ({
    type: CREATE_VENDOR_SUCCESS,
    payload: message
})

export const createVendorFailed = (message) => ({
    type: CREATE_VENDOR_FAILED,
    payload: message
})

export const createEVP = (data) => ({
    type: CREATE_EVP,
    payload: { data }
})

export const createEVPSuccess = (message) => ({
    type: CREATE_EVP_SUCCESS,
    payload: message
})

export const createEVPFailed = (message) => ({
    type: CREATE_EVP_FAILED,
    payload: message
})

export const createSuperEVP = (data) => ({
    type: CREATE_SUPEREVP,
    payload: { data }
})

export const createSuperEVPSuccess = (message) => ({
    type: CREATE_SUPEREVP_SUCCESS,
    payload: message
})

export const createSuperEVPFailed = (message) => ({
    type: CREATE_SUPEREVP_FAILED,
    payload: message
})