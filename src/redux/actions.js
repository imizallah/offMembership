/* eslint-disable import/no-cycle */
/* SETTINGS */
export const CHANGE_LOCALE = 'CHANGE_LOCALE';

/* AUTH */
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';
export const CHECK_PASSWORD_TOKEN = 'CHECK_PASSWORD_TOKEN';
export const CHECK_PASSWORD_TOKEN_SUCCESS = 'CHECK_PASSWORD_TOKEN_SUCCESS';
export const CHECK_PASSWORD_TOKEN_ERROR = 'CHECK_PASSWORD_TOKEN_ERROR';
export const VERIFY_PHONE = 'VERIFY_PHONE';
export const VERIFY_PHONE_SUCCESS = 'VERIFY_PHONE_SUCCESS';
export const VERIFY_PHONE_ERROR = 'VERIFY_PHONE_ERROR';
export const VERIFY_PHONE_TOKEN = 'VERIFY_PHONE_TOKEN';
export const VERIFY_PHONE_TOKEN_SUCCESS = 'VERIFY_PHONE_TOKEN_SUCCESS';
export const VERIFY_PHONE_TOKEN_ERROR = 'VERIFY_PHONE_TOKEN_ERROR';

/* MENU */
export const MENU_SET_CLASSNAMES = 'MENU_SET_CLASSNAMES';
export const MENU_CONTAINER_ADD_CLASSNAME = 'MENU_CONTAINER_ADD_CLASSNAME';
export const MENU_CLICK_MOBILE_MENU = 'MENU_CLICK_MOBILE_MENU';
export const MENU_CHANGE_DEFAULT_CLASSES = 'MENU_CHANGE_DEFAULT_CLASSES';
export const MENU_CHANGE_HAS_SUB_ITEM_STATUS =
  'MENU_CHANGE_HAS_SUB_ITEM_STATUS';

/* TODOAPP */
export const TODO_GET_LIST = 'TODO_GET_LIST';
export const TODO_GET_LIST_SUCCESS = 'TODO_GET_LIST_SUCCESS';
export const TODO_GET_LIST_ERROR = 'TODO_GET_LIST_ERROR';
export const TODO_GET_LIST_WITH_FILTER = 'TODO_GET_LIST_WITH_FILTER';
export const TODO_GET_LIST_WITH_ORDER = 'TODO_GET_LIST_WITH_ORDER';
export const TODO_GET_LIST_SEARCH = 'TODO_GET_LIST_SEARCH';
export const TODO_ADD_ITEM = 'TODO_ADD_ITEM';
export const TODO_ADD_ITEM_SUCCESS = 'TODO_ADD_ITEM_SUCCESS';
export const TODO_ADD_ITEM_ERROR = 'TODO_ADD_ITEM_ERROR';
export const TODO_SELECTED_ITEMS_CHANGE = 'TODO_SELECTED_ITEMS_CHANGE';

/* CHAT APP */
export const CHAT_GET_CONTACTS = 'CHAT_GET_CONTACTS';
export const CHAT_GET_CONTACTS_SUCCESS = 'CHAT_GET_CONTACTS_SUCCESS';
export const CHAT_GET_CONTACTS_ERROR = 'CHAT_GET_CONTACTS_ERROR';
export const CHAT_GET_CONVERSATIONS = 'CHAT_GET_CONVERSATIONS';
export const CHAT_GET_CONVERSATIONS_SUCCESS = 'CHAT_GET_CONVERSATIONS_SUCCESS';
export const CHAT_GET_CONVERSATIONS_ERROR = 'CHAT_GET_CONVERSATIONS_ERROR';
export const CHAT_ADD_MESSAGE_TO_CONVERSATION =
  'CHAT_ADD_MESSAGE_TO_CONVERSATION';
export const CHAT_CREATE_CONVERSATION = 'CHAT_CREATE_CONVERSATION';
export const CHAT_SEARCH_CONTACT = 'CHAT_SEARCH_CONTACT';
export const CHAT_CHANGE_CONVERSATION = 'CHAT_CHANGE_CONVERSATION';

/* SURVEY LIST APP */
export const SURVEY_LIST_GET_LIST = 'SURVEY_LIST_GET_LIST';
export const SURVEY_LIST_GET_LIST_SUCCESS = 'SURVEY_LIST_GET_LIST_SUCCESS';
export const SURVEY_LIST_GET_LIST_ERROR = 'SURVEY_LIST_GET_LIST_ERROR';
export const SURVEY_LIST_GET_LIST_WITH_FILTER =
  'SURVEY_LIST_GET_LIST_WITH_FILTER';
export const SURVEY_LIST_GET_LIST_WITH_ORDER =
  'SURVEY_LIST_GET_LIST_WITH_ORDER';
export const SURVEY_LIST_GET_LIST_SEARCH = 'SURVEY_LIST_GET_LIST_SEARCH';
export const SURVEY_LIST_ADD_ITEM = 'SURVEY_LIST_ADD_ITEM';
export const SURVEY_LIST_ADD_ITEM_SUCCESS = 'SURVEY_LIST_ADD_ITEM_SUCCESS';
export const SURVEY_LIST_ADD_ITEM_ERROR = 'SURVEY_LIST_ADD_ITEM_ERROR';
export const SURVEY_LIST_SELECTED_ITEMS_CHANGE =
  'SURVEY_LIST_SELECTED_ITEMS_CHANGE';

/* SURVEY DETAIL APP */
export const SURVEY_GET_DETAILS = 'SURVEY_GET_DETAILS';
export const SURVEY_GET_DETAILS_SUCCESS = 'SURVEY_GET_DETAILS_SUCCESS';
export const SURVEY_GET_DETAILS_ERROR = 'SURVEY_GET_DETAILS_ERROR';
export const SURVEY_DELETE_QUESTION = 'SURVEY_DELETE_QUESTION';
export const SURVEY_SAVE = 'SURVEY_SAVE';

/* Knowledge Base */
export const CREATE_FAQ = 'CREATE_FAQ'
export const CREATE_FAQ_FAILED = 'CREATE_FAQ_FAILED'
export const CREATE_FAQ_SUCCESS = 'CREATE_FAQ_SUCCESS'

export const EDIT_FAQ = 'EDIT_FAQ'
export const EDIT_FAQ_FAILED = 'EDIT_FAQ_FAILED'
export const EDIT_FAQ_SUCCESS = 'EDIT_FAQ_SUCCESS'

export const DELETE_FAQ = 'DELETE_FAQ'
export const DELETE_FAQ_FAILED = 'DELETE_FAQ_FAILED'
export const DELETE_FAQ_SUCCESS = 'DELETE_FAQ_SUCCESS'

export const GET_FAQ = 'GET_FAQ'
export const GET_FAQ_FAILED = 'GET_FAQ_FAILED'
export const GET_FAQ_SUCCESS = 'GET_FAQ_SUCCESS'


/* Knowledge Base */
export const CREATE_ADVERT = 'CREATE_ADVERT'
export const CREATE_ADVERT_FAILED = 'CREATE_ADVERT_FAILED'
export const CREATE_ADVERT_SUCCESS = 'CREATE_ADVERT_SUCCESS'

export const EDIT_ADVERT = 'EDIT_ADVERT'
export const EDIT_ADVERT_FAILED = 'EDIT_ADVERT_FAILED'
export const EDIT_ADVERT_SUCCESS = 'EDIT_ADVERT_SUCCESS'

export const DELETE_ADVERT = 'DELETE_ADVERT'
export const DELETE_ADVERT_FAILED = 'DELETE_ADVERT_FAILED'
export const DELETE_ADVERT_SUCCESS = 'DELETE_ADVERT_SUCCESS'

export const GET_ADVERT = 'GET_ADVERT'
export const GET_ADVERT_FAILED = 'GET_ADVERT_FAILED'
export const GET_ADVERT_SUCCESS = 'GET_ADVERT_SUCCESS'

export const GET_USER_ADVERT = 'GET_USER_ADVERT'
export const GET_USER_ADVERT_FAILED = 'GET_USER_ADVERT_FAILED'
export const GET_USER_ADVERT_SUCCESS = 'GET_USER_ADVERT_SUCCESS'

export const UPDATE_ADVERTISER='UPDATE_ADVERTISER'
export const UPDATE_ADVERTISER_FAILED = 'UPDATE_ADVERTISER_FAILED'
export const UPDATE_ADVERTISER_SUCCESS = 'UPDATE_ADVERTISER_SUCCESS'

export const UPDATE_CUSTOMER='UPDATE_CUSTOMER'
export const UPDATE_CUSTOMER_FAILED = 'UPDATE_CUSTOMER_FAILED'
export const UPDATE_CUSTOMER_SUCCESS = 'UPDATE_CUSTOMER_SUCCESS'

export const UPDATE_VENDOR='UPDATE_VENDOR'
export const UPDATE_VENDOR_FAILED = 'UPDATE_VENDOR_FAILED'
export const UPDATE_VENDOR_SUCCESS = 'UPDATE_VENDOR_SUCCESS'

export const UPDATE_EVP='UPDATE_EVP'
export const UPDATE_EVP_FAILED = 'UPDATE_EVP_FAILED'
export const UPDATE_EVP_SUCCESS = 'UPDATE_EVP_SUCCESS'

export const UPDATE_SEVP='UPDATE_SEVP'
export const UPDATE_SEVP_FAILED = 'UPDATE_SEVP_FAILED'
export const UPDATE_SEVP_SUCCESS = 'UPDATE_SEVP_SUCCESS'

export const GET_ACTIVITIES='GET_ACTIVITIES'
export const GET_ACTIVITIES_FAILED = 'GET_ACTIVITIES_FAILED'
export const GET_ACTIVITIES_SUCCESS = 'GET_ACTIVITIES_SUCCESS'


export const CREATE_SEVP = 'CREATE_SEVP'
export const CREATE_SEVP_FAILED = 'CREATE_SEVP_FAILED'
export const CREATE_SEVP_SUCCESS = 'CREATE_SEVP_SUCCESS'

export const GET_SEVP = 'GET_SEVP'
export const GET_SEVP_FAILED = 'GET_SEVP_FAILED'
export const GET_SEVP_SUCCESS = 'GET_SEVP_SUCCESS'

export const GET_SINGLE_SEVP = 'GET_SINGLE_SEVP'
export const GET_SINGLE_SEVP_FAILED = 'GET_SINGLE_SEVP_FAILED'
export const GET_SINGLE_SEVP_SUCCESS = 'GET_SINGLE_SEVP_SUCCESS'


export const GET_USER = 'GET_USER'
export const GET_USER_FAILED = 'GET_USER_FAILED'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'

export const GET_SINGLE_USER = 'GET_SINGLE_USER'
export const GET_SINGLE_USER_FAILED = 'GET_SINGLE_USER_FAILED'
export const GET_SINGLE_USER_SUCCESS = 'GET_SINGLE_USER_SUCCESS'

export const GET_USER_TRANSACTION = 'GET_USER_TRANSACTION'
export const GET_USER_TRANSACTION_FAILED = 'GET_USER_TRANSACTION_FAILED'
export const GET_USER_TRANSACTION_SUCCESS = 'GET_USER_TRANSACTION_SUCCESS'

export const INITIATE_PAYMENT_REQUEST = 'INITIATE_PAYMENT_REQUEST';
export const INITIATE_PAYMENT_SUCCESS = 'INITIATE_PAYMENT_SUCCESS';
export const INITIATE_PAYMENT_FAILED = 'INITIATE_PAYMENT_FAILED';


export const VERIFY_PAYMENT_REQUEST = 'VERIFY_PAYMENT_REQUEST';
export const VERIFY_PAYMENT_SUCCESS = 'VERIFY_PAYMENT_SUCCESS';
export const VERIFY_PAYMENT_FAILED = 'VERIFY_PAYMENT_FAILED';


export const GET_MEMBERSHIP_REQUEST = 'GET_MEMBERSHIP_REQUEST';
export const GET_MEMBERSHIP_SUCCESS = 'GET_MEMBERSHIP_SUCCESS';
export const GET_MEMBERSHIP_FAILED = 'GET_MEMBERSHIP_FAILED';

export const ACCOUNT_FUNDING_REQUEST = 'ACCOUNT_FUNDING_REQUEST';
export const ACCOUNT_FUNDING_SUCCESS = 'ACCOUNT_FUNDING_SUCCESS';
export const ACCOUNT_FUNDING_FAILED = 'ACCOUNT_FUNDING_FAILED';

export const VERIFY_FUNDING_REQUEST = 'VERIFY_FUNDING_REQUEST';
export const VERIFY_FUNDING_SUCCESS = 'VERIFY_FUNDING_SUCCESS';
export const VERIFY_FUNDING_FAILED = 'VERIFY_FUNDING_FAILED';

export const GET_USER_PROFILE = 'GET_USER_PROFILE'
export const GET_USER_PROFILE_FAILED = 'GET_USER_PROFILE_FAILED'
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS'

export const EVP_SETTINGS_REQUEST = 'EVP_SETTINGS_REQUEST'
export const EVP_SETTINGS_REQUEST_FAILED = 'EVP_SETTINGS_REQUEST_FAILED'
export const EVP_SETTINGS_REQUEST_SUCCESS = 'EVP_SETTINGS_REQUEST_SUCCESS'

export const SEVP_SETTINGS_REQUEST = 'SEVP_SETTINGS_REQUEST'
export const SEVP_SETTINGS_REQUEST_FAILED = 'SEVP_SETTINGS_REQUEST_FAILED'
export const SEVP_SETTINGS_REQUEST_SUCCESS = 'SEVP_SETTINGS_REQUEST_SUCCESS'

export const VENDOR_SETTINGS_REQUEST = 'VENDOR_SETTINGS_REQUEST'
export const VENDOR_SETTINGS_REQUEST_FAILED = 'VENDOR_SETTINGS_REQUEST_FAILED'
export const VENDOR_SETTINGS_REQUEST_SUCCESS = 'VENDOR_SETTINGS_REQUEST_SUCCESS'

export const CUSTOMER_SETTINGS_REQUEST = 'CUSTOMER_SETTINGS_REQUEST'
export const CUSTOMER_SETTINGS_REQUEST_FAILED = 'CUSTOMER_SETTINGS_REQUEST_FAILED'
export const CUSTOMER_SETTINGS_REQUEST_SUCCESS = 'CUSTOMER_SETTINGS_REQUEST_SUCCESS'

export const ADVERTISER_SETTINGS_REQUEST = 'ADVERTISER_SETTINGS_REQUEST'
export const ADVERTISER_SETTINGS_REQUEST_FAILED = 'ADVERTISER_SETTINGS_REQUEST_FAILED'
export const ADVERTISER_SETTINGS_REQUEST_SUCCESS = 'ADVERTISER_SETTINGS_REQUEST_SUCCESS'

export const ADVERTS_SETTINGS_REQUEST = 'ADVERTS_SETTINGS_REQUEST'
export const ADVERTS_SETTINGS_REQUEST_FAILED = 'ADVERTS_SETTINGS_REQUEST_FAILED'
export const ADVERTS_SETTINGS_REQUEST_SUCCESS = 'ADVERTS_SETTINGS_REQUEST_SUCCESS'

export const GET_SETTINGS_REQUEST = 'GET_SETTINGS_REQUEST'
export const GET_SETTINGS_REQUEST_FAILED = 'GET_SETTINGS_REQUEST_FAILED'
export const GET_SETTINGS_REQUEST_SUCCESS = 'GET_SETTINGS_REQUEST_SUCCESS'

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST'
export const CREATE_USER_REQUEST_FAILED = 'CREATE_USER_REQUEST_FAILED'
export const CREATE_USER_REQUEST_SUCCESS = 'CREATE_USER_REQUEST_SUCCESS'

export const VERIFY_USER_REQUEST = 'VERIFY_USER_REQUEST'
export const VERIFY_USER_REQUEST_FAILED = 'VERIFY_USER_REQUEST_FAILED'
export const VERIFY_USER_REQUEST_SUCCESS = 'VERIFY_USER_REQUEST_SUCCESS'


export const CREATE_ADVERTISER='CREATE_ADVERTISER'
export const CREATE_ADVERTISER_FAILED = 'CREATE_ADVERTISER_FAILED'
export const CREATE_ADVERTISER_SUCCESS = 'CREATE_ADVERTISER_SUCCESS'

export const CREATE_CUSTOMER='CREATE_CUSTOMER'
export const CREATE_CUSTOMER_FAILED = 'CREATE_CUSTOMER_FAILED'
export const CREATE_CUSTOMER_SUCCESS = 'CREATE_CUSTOMER_SUCCESS'

export const CREATE_VENDOR='CREATE_VENDOR'
export const CREATE_VENDOR_FAILED = 'CREATE_VENDOR_FAILED'
export const CREATE_VENDOR_SUCCESS = 'CREATE_VENDOR_SUCCESS'

export const CREATE_EVP='CREATE_EVP'
export const CREATE_EVP_FAILED = 'CREATE_EVP_FAILED'
export const CREATE_EVP_SUCCESS = 'CREATE_EVP_SUCCESS'

export const CREATE_SUPEREVP='CREATE_SUPEREVP'
export const CREATE_SUPEREVP_FAILED = 'CREATE_SUPEREVP_FAILED'
export const CREATE_SUPEREVP_SUCCESS = 'CREATE_SUPEREVP_SUCCESS'



export const GET_MY_USERS = 'GET_MY_USERS'
export const GET_MY_USERS_FAILED = 'GET_MY_USERS_FAILED'
export const GET_MY_USERS_SUCCESS = 'GET_MY_USERS_SUCCESS'


export * from './menu/actions';
export * from './settings/actions';
export * from './auth/actions';
export * from './knowledgebase/action';
export * from './advert/action'
export * from './membershipProfileUpdate/action'
export * from './todo/actions';
export * from './chat/actions';
export * from './surveyList/actions';
export * from './surveyDetail/actions';
export * from'./analytics/action';
export * from './subEVP/action';
export * from './userManagement/action';
export * from './payment/action'

