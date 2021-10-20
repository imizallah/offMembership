// eslint-disable-next-line import/no-cycle
import {
   
    GET_USER,
    GET_USER_FAILED,
    GET_USER_SUCCESS,

    GET_SINGLE_USER,
    GET_SINGLE_USER_FAILED,
    GET_SINGLE_USER_SUCCESS

} from '../actions';


const init = {
    loading: false,
    error: false,
    message: null,
    users: [],
    singleUser: {}
}

const UserReducer = (state = init, action) => {
    const { type, payload } = action
    console.log(action);
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


        default:
            return { ...state };


    }
}

export default UserReducer