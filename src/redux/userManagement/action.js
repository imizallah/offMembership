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

SETTINGS_REQUEST,
SETTINGS_REQUEST_FAILED ,
SETTINGS_REQUEST_SUCCESS 

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
    type:GET_SINGLE_USER,
    payload: { id }
})

export const getSingleUserSuccess = (message) => ({
    type:GET_SINGLE_USER_SUCCESS,
    payload: message
})

export const getSingleUserFailed = (message) => ({
    type:GET_SINGLE_USER_FAILED,
    payload: message
})


export const saveSettings = (formData) => ({
    type:SETTINGS_REQUEST,
    payload: { formData}
})

export const saveSettingsSuccess = (message) => ({
    type:SETTINGS_REQUEST_SUCCESS,
    payload: message
})

export const saveSettingsFailed = (message) => ({
    type:SETTINGS_REQUEST_FAILED,
    payload: message
})




// export const getUserTransaction = () => ({
//     type:GET_USER_TRANSACTION,
// })

// export const getUserTransactionSuccess = (message) => ({
//     type:GET_USER_TRANSACTION_SUCCESS,
//     payload: message
// })

// export const getUserTransactionFailed = (message) => ({
//     type:GET_USER_TRANSACTION_FAILED,
//     payload: message
// })
