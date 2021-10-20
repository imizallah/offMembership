import{
    GET_ACTIVITIES,
    GET_ACTIVITIES_FAILED ,
    GET_ACTIVITIES_SUCCESS,
    } from '../actions';

const init = {
    loading: false,
    error: false,
    message: null,
    activities: null
}

const ActivitiesReducer = (state = init, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_ACTIVITIES:
            return { ...state, loading: true }
        case GET_ACTIVITIES_SUCCESS:
            return { ...state, loading: false, message: payload, error: '', activities: payload.data }
        case GET_ACTIVITIES_FAILED:
            return { ...state, loading: false, message: '', error: payload }
        default:
            return { ...state };

    }
}

export default ActivitiesReducer