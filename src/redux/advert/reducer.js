// eslint-disable-next-line import/no-cycle
import {

    CREATE_ADVERT,
    CREATE_ADVERT_FAILED,
    CREATE_ADVERT_SUCCESS,

    EDIT_ADVERT,
    EDIT_ADVERT_FAILED,
    EDIT_ADVERT_SUCCESS,

    DELETE_ADVERT,
    DELETE_ADVERT_FAILED,
    DELETE_ADVERT_SUCCESS,

    GET_ADVERT,
    GET_ADVERT_FAILED,
    GET_ADVERT_SUCCESS,

    GET_USER_ADVERT,
    GET_USER_ADVERT_FAILED,
    GET_USER_ADVERT_SUCCESS,
} from '../actions';

const init = {
    loading: false,
    createAdvertLoading: false,
    editAdvertLoading:false,
    deleteAdvertLoading:false,
    error: false,
    message: null,
    userAdverts: [],
    adverts: []
}


const AdvertReducer = (state = init, action) => {
    const { type, payload } = action
    console.log(action);
    switch (type) {
        case CREATE_ADVERT:
            return { ...state, createAdvertLoading: true }
        case CREATE_ADVERT_SUCCESS:
            return { ...state, createAdvertLoading: false, message: payload, error: '' }
        case CREATE_ADVERT_FAILED:
            return { ...state, createAdvertLoading: false, message: '', error: payload }

        case EDIT_ADVERT:
            return { ...state, loading: true }
        case EDIT_ADVERT_SUCCESS:
            return { ...state, loading: false, message: payload, error: '' }
        case EDIT_ADVERT_FAILED:
            return { ...state, loading: false, message: '', error: payload }

        case DELETE_ADVERT:
            return { ...state, loading: true }
        case DELETE_ADVERT_SUCCESS:
            return { ...state, loading: false, message: payload, error: '' }
        case DELETE_ADVERT_FAILED:
            return { ...state, loading: false, message: '', error: payload }


        case GET_ADVERT:
            return { ...state, loading: true }
        case GET_ADVERT_SUCCESS:
            return { ...state, loading: false, message: payload, error: '', adverts: payload.data }
        case GET_ADVERT_FAILED:
            return { ...state, loading: false, message: '', error: payload }


        case GET_USER_ADVERT:
            return { ...state, loading: true }
        case GET_USER_ADVERT_SUCCESS:
            return { ...state, loading: false, message: payload, error: '', userAdverts: payload.data }
        case GET_USER_ADVERT_FAILED:
            return { ...state, loading: false, message: '', error: payload }





        default:
            return { ...state };


    }
}

export default AdvertReducer