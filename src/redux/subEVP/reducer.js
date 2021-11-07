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


const init = {
    loading: false,
    createSEVPLoading: false,
    SEVPError: false,
    message: null,
    sevp: [],
    singleSEVP:null
}

const SEVPReducer = (state = init, action) => {
    const { type, payload } = action
    console.log(action);
    switch (type) {
        case CREATE_SEVP:
            return { ...state, createSEVPLoading: true }
        case CREATE_SEVP_SUCCESS:
            return { ...state, createSEVPLoading: false, message: payload, SEVPError: '' }
        case CREATE_SEVP_FAILED:
            return { ...state, createSEVPLoading: false, message: '', SEVPError: payload }

        case GET_SEVP:
            return { ...state, loading: true }
        case GET_SEVP_SUCCESS:
            return { ...state, loading: false, message: payload, SEVPError: '', sevp: payload.data.subevps }
        case GET_SEVP_FAILED:
            return { ...state, loading: false, message: '', SEVPError: payload }


        case GET_SINGLE_SEVP:
            return { ...state, loading: true }
        case GET_SINGLE_SEVP_SUCCESS:
            return { ...state, loading: false, message: payload, SEVPError: '', singleSEVP: payload.data }
        case GET_SINGLE_SEVP_FAILED:
            return { ...state, loading: false, message: '', SEVPError: payload }


        default:
            return { ...state };


    }
}

export default SEVPReducer