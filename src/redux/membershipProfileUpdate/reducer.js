import {
    UPDATE_ADVERTISER,
    UPDATE_ADVERTISER_FAILED,
    UPDATE_ADVERTISER_SUCCESS,

    UPDATE_CUSTOMER,
    UPDATE_CUSTOMER_FAILED,
    UPDATE_CUSTOMER_SUCCESS,

    UPDATE_VENDOR,
    UPDATE_VENDOR_FAILED,
    UPDATE_VENDOR_SUCCESS,

    UPDATE_EVP,
    UPDATE_EVP_FAILED,
    UPDATE_EVP_SUCCESS,

    UPDATE_SEVP,
    UPDATE_SEVP_FAILED,
    UPDATE_SEVP_SUCCESS,
} from '../actions';



const init = {
    loading: false,
    error: '',
    message: ''
}

const MembershipReducer = (state = init, action) => {
    const { type, payload } = action
    switch (type) {
        case UPDATE_ADVERTISER:
            return { ...state, loading: true }
        case UPDATE_ADVERTISER_SUCCESS:
            return { ...state, loading: false, message: payload, error: '' }
        case UPDATE_ADVERTISER_FAILED:
            return { ...state, loading: false, message: '', error: payload }

        case UPDATE_CUSTOMER:
            return { ...state, loading: true }
        case UPDATE_CUSTOMER_SUCCESS:
            return { ...state, loading: false, message: payload, error: '' }
        case UPDATE_CUSTOMER_FAILED:
            return { ...state, loading: false, message: '', error: payload }

        case UPDATE_VENDOR:
            return { ...state, loading: true }
        case UPDATE_VENDOR_SUCCESS:
            return { ...state, loading: false, message: payload, error: '' }
        case UPDATE_VENDOR_FAILED:
            return { ...state, loading: false, message: '', error: payload }

        case UPDATE_EVP:
            return { ...state, loading: true }
        case UPDATE_EVP_SUCCESS:
            return { ...state, loading: false, message: payload, error: '' }
        case UPDATE_EVP_FAILED:
            return { ...state, loading: false, message: '', error: payload }

        case UPDATE_SEVP:
            return { ...state, loading: true }
        case UPDATE_SEVP_SUCCESS:
            return { ...state, loading: false, message: payload, error: '' }
        case UPDATE_SEVP_FAILED:
            return { ...state, loading: false, message: '', error: payload }


        default:
            return { ...state };


    }
}

export default MembershipReducer