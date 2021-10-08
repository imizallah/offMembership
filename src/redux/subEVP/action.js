// eslint-disable-next-line import/no-cycle
import {
CREATE_SEVP,
CREATE_SEVP_FAILED,
CREATE_SEVP_SUCCESS,

GET_SEVP,
GET_SEVP_FAILED,
GET_SEVP_SUCCESS,

GET_SINGLE_SEVP,
GET_SINGLE_SEVP_FAILED,
GET_SINGLE_SEVP_SUCCESS

} from '../actions';


export const createSEVP = (data) => ({
    type: CREATE_SEVP,
    payload: { data }
})

export const createSEVPSuccess = (message) => ({
    type: CREATE_SEVP_SUCCESS,
    payload: message
})

export const createSEVPFailed = (message) => ({
    type: CREATE_SEVP_FAILED,
    payload: message
})


export const getSEVP = (data) => ({
    type: GET_SEVP,
    payload: { data }
})

export const getSEVPSuccess = (message) => ({
    type: GET_SEVP_SUCCESS,
    payload: message
})

export const getSEVPFailed = (message) => ({
    type: GET_SEVP_FAILED,
    payload: message
})



export const getSingleSEVP = (data) => ({
    type:GET_SINGLE_SEVP,
    payload: { data }
})

export const getSingleSEVPSuccess = (message) => ({
    type:GET_SINGLE_SEVP_SUCCESS,
    payload: message
})

export const getSingleSEVPFailed = (message) => ({
    type:GET_SINGLE_SEVP_FAILED,
    payload: message
})

