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

    SETTINGS_REQUEST,
    SETTINGS_REQUEST_FAILED,
    SETTINGS_REQUEST_SUCCESS


    // GET_USER_TRANSACTION,
    // GET_USER_TRANSACTION_FAILED,
    // GET_USER_TRANSACTION_SUCCESS

} from '../actions';


const init = {
    loading: false,
    createLoading:false,
    error: false,
    message: null,
    users: [],
    singleUser: {},
    userProfile: null,
    transactions: []
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


        case SETTINGS_REQUEST:
            return { ...state, createLoading: true }
        case SETTINGS_REQUEST_SUCCESS:
            return { ...state, createLoading: false, message: payload, error: '', }
        case SETTINGS_REQUEST_FAILED:
            return { ...state, createLoading: false, message: '', error: payload }

        // case GET_USER_TRANSACTION:
        //     return { ...state, loading: true }
        // case GET_USER_TRANSACTION_SUCCESS:
        //     return { ...state, loading: false, message: payload, error: '', transactions: payload.data }
        // case GET_USER_TRANSACTION_FAILED:
        //     return { ...state, loading: false, message: '', error: payload }


        default:
            return { ...state };


    }
}

export default UserReducer