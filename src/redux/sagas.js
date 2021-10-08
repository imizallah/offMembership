import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import todoSagas from './todo/saga';
import chatSagas from './chat/saga';
import surveyListSagas from './surveyList/saga';
import surveyDetailSagas from './surveyDetail/saga';
import FAQSagas from'./knowledgebase/saga';
import AdvertSaga from'./advert/saga';
import membershipSaga from './membershipProfileUpdate/saga';
import analyticSaga from './analytics/saga';
import EVPSaga from './subEVP/saga';

export default function* rootSaga() {
  yield all([
    authSagas(),
    todoSagas(),
    chatSagas(),
    surveyListSagas(),
    surveyDetailSagas(),
    FAQSagas(),
    AdvertSaga(),
    membershipSaga(),
    analyticSaga(),
    EVPSaga()
  ]);
}
