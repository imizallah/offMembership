// eslint-disable-next-line import/no-cycle
import {

    CREATE_FAQ,
    CREATE_FAQ_FAILED,
    CREATE_FAQ_SUCCESS,

    EDIT_FAQ,
    EDIT_FAQ_FAILED,
    EDIT_FAQ_SUCCESS,

    DELETE_FAQ,
    DELETE_FAQ_FAILED,
    DELETE_FAQ_SUCCESS,

    GET_FAQ,
    GET_FAQ_FAILED,
    GET_FAQ_SUCCESS
} from '../actions';

const init = {
    loading: false,
    createFAQLoading: false,
    editLoading:false,
    error: false,
    message: '',
    faqs: [],
    singleFaq: null
}


const FAQReducer = (state = init, action) => {
    const { type, payload } = action
    switch (type) {
        case CREATE_FAQ:
            return { ...state, createFAQLoading: true }
        case CREATE_FAQ_SUCCESS:
            return { ...state, createFAQLoading: false, message: payload, error: '' }
        case CREATE_FAQ_FAILED:
            return { ...state, createFAQLoading: false, message: '', error: payload }

        case EDIT_FAQ:
            return { ...state, editLoading: true }
        case EDIT_FAQ_SUCCESS:
            return { ...state, editLoading: false, message: payload, error: '' }
        case EDIT_FAQ_FAILED:
            return { ...state, editLoading: false, message: '', error: payload }

        case DELETE_FAQ:
            return { ...state, loading: true }
        case DELETE_FAQ_SUCCESS:
            return { ...state, loading: false, message: payload, error: '' }
        case DELETE_FAQ_FAILED:
            return { ...state, loading: false, message: '', error: payload }


        case GET_FAQ:
            return { ...state, loading: true }
        case GET_FAQ_SUCCESS:
            return { ...state, loading: false, message: payload, error: '', faqs: payload.data }
        case GET_FAQ_FAILED:
            return { ...state, loading: false, message: '', error: payload }

        default:
            return { ...state };


    }
}

export default FAQReducer