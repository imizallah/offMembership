// eslint-disable-next-line import/no-cycle
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'helpers/axios';
import {
    CREATE_FAQ,
    EDIT_FAQ,
    DELETE_FAQ,
    GET_FAQ,
    createFAQSuccess,
    createFAQFailed,
    updateFAQSuccess,
    updateFAQFailed,
    deleteFAQSuccess,
    deleteFAQFailed,
    getFAQSucces,
    getFAQFailed
} from '../actions';


function* createFAQ(payload) {
//    yield console.log(payload.payload.data)
    try {
        const response = yield axios.post('faq/create', payload.payload.data)
        if (response.data.success) {
            yield put(createFAQSuccess(response.data.message));
        } else {
            yield put(createFAQFailed(response.data.message));
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
        yield put(createFAQFailed(message));
    }
}

function* updateFAQ({ id, formData }) {
    try {
        const response = yield axios.put(`event-management/update-event-type/${id}`, formData)
        if (response.data.success) {
            yield put(updateFAQSuccess(response.data.message));
        } else {
            yield put(updateFAQFailed(response.data.message));
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
        yield put(updateFAQFailed(message));
    }
}


function* deleteFAQ(id) {
    try {
        const response = yield axios.del(`event-management/delete-event-type${id}`)
        if (response.data.success) {
            yield put(deleteFAQSuccess(response.data.message));
        } else {
            yield put(deleteFAQFailed(response.data.message));
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
        yield put(deleteFAQFailed(message));
    }
}


function* getFAQ({ payload: { page } }) {
    console.log(page)
    try {
        const response = yield axios.get(`event/all-events?page=${page}&eventLimits=10`)
        if (response.data.success) {
            yield put(getFAQSucces(response.data));
        } else {
            yield put(getFAQFailed(response.data.message));
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
        yield put(getFAQFailed(message));
    }
}

export function* watchCreateFAQ() {
    yield takeEvery(CREATE_FAQ, createFAQ);
  }
  
  export function* watchEditFAQ() {
    yield takeEvery(EDIT_FAQ, updateFAQ);
  }
  
  export function* watchDeleteFAQ() {
    yield takeEvery(DELETE_FAQ, deleteFAQ);
  }
  
  export function* watchGetFAQ() {
    yield takeEvery(GET_FAQ, getFAQ);
  }

  export default function* rootSaga() {
    yield all([
      fork(watchCreateFAQ),
      fork(watchEditFAQ),
      fork(watchDeleteFAQ),
      fork(watchGetFAQ),
    ]);
  }