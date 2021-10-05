// eslint-disable-next-line import/no-cycle
import { all, fork, put,call, takeEvery } from 'redux-saga/effects';
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

function* getFAQ() {
    try {
        const response = yield axios.get(`faq/all-faqs`)
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

function* createFAQ(payload) {
//    yield console.log(payload.payload.data)
    try {
        const response = yield axios.post('faq/create', payload.payload.data)
        if (response.data.success) {
            yield put(createFAQSuccess(response.data.message));
            yield call(getFAQ);
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
        const response = yield axios.put(`/faq/update?faqId=${id}`, formData)
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


function* deleteFAQ(payload) {
  
    try {
        const response = yield axios.delete(`/faq/delete?faqId=${payload.payload.id}`)
        if (response.data.success) {
            yield put(deleteFAQSuccess(response.data.message));
            yield call(getFAQ);
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