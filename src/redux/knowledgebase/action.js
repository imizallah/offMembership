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


export const createFAQ = (data) => ({
    type: CREATE_FAQ,
    payload: { data }
})

export const createFAQSuccess = (message) => ({
    type: CREATE_FAQ_SUCCESS,
    payload: message
})

export const createFAQFailed = (message) => ({
    type: CREATE_FAQ_FAILED,
    payload: message
})


export const updateFAQ = (data, id) => ({
    type: EDIT_FAQ,
    payload: { data, id }
})

export const updateFAQSuccess = (message) => ({
    type: EDIT_FAQ_SUCCESS,
    payload: message
})

export const updateFAQFailed = (message) => ({
    type: EDIT_FAQ_FAILED,
    payload: message
})


export const deleteFAQ = (id) => ({
    type: DELETE_FAQ,
    payload: { id }
})

export const deleteFAQSuccess = (message) => ({
    type: DELETE_FAQ_SUCCESS,
    payload: message
})

export const deleteFAQFailed = (message) => ({
    type: DELETE_FAQ_FAILED,
    payload: message
})

export const getFAQ = () => ({
    type: GET_FAQ,
    // payload: { id }
})

export const getFAQSucces = (data) => ({
    type: GET_FAQ_SUCCESS,
    payload: data
})

export const getFAQFailed = (message) => ({
    type: GET_FAQ_FAILED,
    payload: message
})


