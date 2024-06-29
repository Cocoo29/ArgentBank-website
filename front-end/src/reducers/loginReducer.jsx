import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/actions';

const INITIAL_STATE = {
  isLogged: false,
  token: '',
  error: null,
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const { token } = action.payload.body;
      return { ...state, isLogged: true, token, error: null };
    }
    case USER_LOGIN_FAIL: {
      const { payload: error } = action;
      return { ...state, isLogged: false, token: '', error };
    }
    case USER_LOGOUT:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
