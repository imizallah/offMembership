// eslint-disable-next-line import/no-cycle
import{
GET_ACTIVITIES,
GET_ACTIVITIES_FAILED ,
GET_ACTIVITIES_SUCCESS,
} from '../actions';


export const getActivities= () => ({
    type: GET_ACTIVITIES,
    // payload: { id }
})

export const getActivitiesSuccess = (data) => ({
    type: GET_ACTIVITIES_SUCCESS,
    payload: data
})

export const getActivitiesFailed = (message) => ({
    type: GET_ACTIVITIES_FAILED,
    payload: message
})
