// eslint-disable-next-line import/no-cycle
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'helpers/axios';
import {
    GET_ACTIVITIES,
    getActivitiesSuccess,
    getActivitiesFailed,
} from '../actions';


function* getActivities() {

    try {
        const response = yield axios.get(`/analytics/all-activities`)
        console.log(response.data)
        if (response.data.success) {
            yield put(getActivitiesSuccess(response.data));
        } else {
            yield put(getActivitiesFailed(response.data.message));
        }
    } catch (error) {
        console.log(error.response);
        let message;
        if (error.response) {
            switch (error.response.status) {
                case 500:
                    message = 'Internal Server Error';
                    break;
                case 404:
                    message = 'Not found';
                    break;
                case 401:
                    message = 'Invalid credentials';
                    break;
                default:
                    message = error.response.data.message;
            }
        }
        else if (error.message) {
            message = error.message;
        }
        yield put(getActivitiesFailed(message));
    }
}


export function* watchGetActivities() {
    yield takeEvery(GET_ACTIVITIES, getActivities);
}


export default function* rootSaga() {
    yield all([
        fork(watchGetActivities)
    ]);
}