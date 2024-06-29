import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
  USER_PROFILE_UPDATE,
  USER_PROFILE_UPDATE_FAIL,
} from '../constants/actions';

const INITIAL_STATE = {
  success: false,
  firstName: '',
  lastName: '',
  previousUsername: '',
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      const { firstName, lastName } = action.payload.body;
      return {
        ...state,
        success: true,
        firstName,
        lastName,
        previousUsername: state.firstName === '' ? state.previousUsername : state.firstName, // Met à jour le pseudo précédent seulement s'il n'est pas vide
      };
    case USER_PROFILE_UPDATE:
      return {
        ...state,
        success: true,
        firstName: action.payload.body.firstName || state.firstName,
        lastName: action.payload.body.lastName || state.lastName,
        previousUsername: state.firstName,
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

