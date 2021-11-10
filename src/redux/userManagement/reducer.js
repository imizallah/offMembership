// eslint-disable-next-line import/no-cycle
import {

    GET_USER,
    GET_USER_FAILED,
    GET_USER_SUCCESS,

    GET_SINGLE_USER,
    GET_SINGLE_USER_FAILED,
    GET_SINGLE_USER_SUCCESS,

    GET_USER_PROFILE,
    GET_USER_PROFILE_FAILED,
    GET_USER_PROFILE_SUCCESS,

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

    GET_SETTINGS_REQUEST,
    GET_SETTINGS_REQUEST_FAILED,
    GET_SETTINGS_REQUEST_SUCCESS,


    // GET_USER_TRANSACTION,
    // GET_USER_TRANSACTION_FAILED,
    // GET_USER_TRANSACTION_SUCCESS

} from '../actions';


const init = {
    loading: false,
    createLoading: false,
    error: false,
    message: null,
    users: [],
    singleUser: {},
    userProfile: null,
    transactions: [],
    settings: {
        advertAmount: '',
        advertiser: { amount: '', duration: '' },
        customer: { amount: '', duration: '' },
        evp: { level1: '', level2: '', level3: '' },
        superevp: { startingCredit: '', percentageProfit: '' },
        vendor: { amount: '', duration: '' }
    }
}

const UserReducer = (state = init, action) => {
    const { type, payload } = action
    switch (type) {

        case GET_USER:
            return { ...state, loading: true }
        case GET_USER_SUCCESS:
            return { ...state, loading: false, message: payload, error: '', users: payload.data.users }
        case GET_USER_FAILED:
            return { ...state, loading: false, message: '', error: payload }


        case GET_SINGLE_USER:
            return { ...state, loading: true }
        case GET_SINGLE_USER_SUCCESS:
            return { ...state, loading: false, message: payload, error: '', singleUser: payload.data }
        case GET_SINGLE_USER_FAILED:
            return { ...state, loading: false, message: '', error: payload }

        case GET_USER_PROFILE:
            return { ...state, loading: true }
        case GET_USER_PROFILE_SUCCESS:
            return { ...state, loading: false, message: payload, error: '', userProfile: payload.data }
        case GET_USER_PROFILE_FAILED:
            return { ...state, loading: false, message: '', error: payload }


        case EVP_SETTINGS_REQUEST:
            return { ...state, createLoading: true }
        case EVP_SETTINGS_REQUEST_SUCCESS:
            return { ...state, createLoading: false, message: payload, error: '', }
        case EVP_SETTINGS_REQUEST_FAILED:
            return { ...state, createLoading: false, message: '', error: payload }


        case SEVP_SETTINGS_REQUEST:
            return { ...state, createLoading: true }
        case SEVP_SETTINGS_REQUEST_SUCCESS:
            return { ...state, createLoading: false, message: payload, error: '', }
        case SEVP_SETTINGS_REQUEST_FAILED:
            return { ...state, createLoading: false, message: '', error: payload }

        case VENDOR_SETTINGS_REQUEST:
            return { ...state, createLoading: true }
        case VENDOR_SETTINGS_REQUEST_SUCCESS:
            return { ...state, createLoading: false, message: payload, error: '', }
        case VENDOR_SETTINGS_REQUEST_FAILED:
            return { ...state, createLoading: false, message: '', error: payload }

        case CUSTOMER_SETTINGS_REQUEST:
            return { ...state, createLoading: true }
        case CUSTOMER_SETTINGS_REQUEST_SUCCESS:
            return { ...state, createLoading: false, message: payload, error: '', }
        case CUSTOMER_SETTINGS_REQUEST_FAILED:
            return { ...state, createLoading: false, message: '', error: payload }

        case ADVERTISER_SETTINGS_REQUEST:
            return { ...state, createLoading: true }
        case ADVERTISER_SETTINGS_REQUEST_SUCCESS:
            return { ...state, createLoading: false, message: payload, error: '', }
        case ADVERTISER_SETTINGS_REQUEST_FAILED:
            return { ...state, createLoading: false, message: '', error: payload }

        case ADVERTS_SETTINGS_REQUEST:
            return { ...state, createLoading: true }
        case ADVERTS_SETTINGS_REQUEST_SUCCESS:
            return { ...state, createLoading: false, message: payload, error: '', }
        case ADVERTS_SETTINGS_REQUEST_FAILED:
            return { ...state, createLoading: false, message: '', error: payload }


        case GET_SETTINGS_REQUEST:
            return { ...state, loading: true }
        case GET_SETTINGS_REQUEST_SUCCESS:
            return { ...state, loading: false, message: payload, error: '', settings: payload.data }
        case GET_SETTINGS_REQUEST_FAILED:
            return { ...state, loading: false, message: '', error: payload }


        default:
            return { ...state };


    }
}

export default UserReducer