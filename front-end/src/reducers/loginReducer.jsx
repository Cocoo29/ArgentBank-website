import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/actions'

const INITIAL_STATE = {
  isLogged: false,
  token: '',
}

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const { token } = action.payload.body;
      return { ...state, isLogged: true, token };
    }
    case USER_LOGIN_FAIL: {
      const { error } = action.payload;
      return { ...state, isLogged: false, token: null, error };
    }
    case USER_LOGOUT:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
