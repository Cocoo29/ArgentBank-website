import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
  USER_PROFILE_UPDATE,
  USER_PROFILE_UPDATE_FAIL,
} from '../constants/actions'

const INITIAL_STATE = { success: false, firstName: '', lastName: '' }

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      const { firstName, lastName } = action.payload.body;
      return { ...state, success: true, firstName, lastName };
    case USER_PROFILE_UPDATE:
      return {
        ...state,
        success: true,
        firstName: action.payload.body.firstName || state.firstName,
        lastName: action.payload.body.lastName || state.lastName,
      };
    case USER_PROFILE_UPDATE_FAIL:
      return { ...state, error: action.payload };
    case USER_PROFILE_FAIL:
      return { ...state, error: action.payload };
    case USER_PROFILE_RESET:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
