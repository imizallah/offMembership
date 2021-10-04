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


export const createAdvert = (data) => ({
    type: CREATE_ADVERT,
    payload: { data }
})

export const createAdvertSuccess = (message) => ({
    type: CREATE_ADVERT_SUCCESS,
    payload: message
})

export const createAdvertFailed = (message) => ({
    type: CREATE_ADVERT_FAILED,
    payload: message
})


export const updateAdvert = (data, id) => ({
    type: EDIT_ADVERT,
    payload: { data, id }
})

export const updateAdvertSuccess = (message) => ({
    type: EDIT_ADVERT_SUCCESS,
    payload: message
})

export const updateAdvertFailed = (message) => ({
    type: EDIT_ADVERT_FAILED,
    payload: message
})


export const deleteAdvert = (id) => ({
    type: DELETE_ADVERT,
    payload: { id }
})

export const deleteAdvertSuccess = (message) => ({
    type: DELETE_ADVERT_SUCCESS,
    payload: message
})

export const deleteAdvertFailed = (message) => ({
    type: DELETE_ADVERT_FAILED,
    payload: message
})

export const getAdvert = () => ({
    type: GET_ADVERT,
    // payload: { id }
})

export const getAdvertSucces = (data) => ({
    type: GET_ADVERT_SUCCESS,
    payload: data
})

export const getAdvertFailed = (message) => ({
    type: GET_ADVERT_FAILED,
    payload: message
})

export const getUserAdvert = () => ({
    type: GET_USER_ADVERT,
    // payload: { id }
})

export const getUserAdvertSucces = (data) => ({
    type: GET_USER_ADVERT_SUCCESS,
    payload: data
})

export const getUserAdvertFailed = (message) => ({
    type: GET_USER_ADVERT_FAILED,
    payload: message
})


