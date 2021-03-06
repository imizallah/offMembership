import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import todoApp from './todo/reducer';
import chatApp from './chat/reducer';
import surveyListApp from './surveyList/reducer';
import surveyDetailApp from './surveyDetail/reducer';
import FAQ from './knowledgebase/reducer';
import advert from'./advert/reducer';
import membership from './membershipProfileUpdate/reducer';
import analytics from './analytics/reducer';
import subEVP from'./subEVP/reducer';
import user from'./userManagement/reducer';
import payment from './payment/reducer';



const reducers = combineReducers({
  menu,
  settings,
  authUser,
  todoApp,
  chatApp,
  surveyListApp,
  surveyDetailApp,
  FAQ,
  advert,
  membership,
  analytics,
  subEVP,
  user,
  payment
});

export default reducers;
