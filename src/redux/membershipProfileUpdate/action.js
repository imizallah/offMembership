// eslint-disable-next-line import/no-cycle
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

export const updateAdvertiser = (data) => ({
    type: UPDATE_ADVERTISER,
    payload: { data }
})

export const updateAdvertiserSuccess = (message) => ({
    type: UPDATE_ADVERTISER_SUCCESS,
    payload: message
})

export const updateAdvertiserFailed = (message) => ({
    type: UPDATE_ADVERTISER_FAILED,
    payload: message
})

export const updateCustomer = (data) => ({
    type: UPDATE_CUSTOMER,
    payload: { data }
})

export const updateCustomerSuccess = (message) => ({
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: message
})

export const updateCustomerFailed = (message) => ({
    type: UPDATE_CUSTOMER_FAILED,
    payload: message
})

export const updateVendor = (data) => ({
    type: UPDATE_VENDOR,
    payload: { data }
})

export const updateVendorSuccess = (message) => ({
    type: UPDATE_VENDOR_SUCCESS,
    payload: message
})

export const updateVendorFailed = (message) => ({
    type: UPDATE_VENDOR_FAILED,
    payload: message
})

export const updateEVP = (data) => ({
    type: UPDATE_EVP,
    payload: { data }
})

export const updateEVPSuccess = (message) => ({
    type: UPDATE_EVP_SUCCESS,
    payload: message
})

export const updateEVPFailed = (message) => ({
    type: UPDATE_EVP_FAILED,
    payload: message
})

export const updateSEVP = (data) => ({
    type: UPDATE_SEVP,
    payload: { data }
})

export const updateSEVPSuccess = (message) => ({
    type: UPDATE_SEVP_SUCCESS,
    payload: message
})

export const updateSEVPFailed = (message) => ({
    type: UPDATE_SEVP_FAILED,
    payload: message
})
