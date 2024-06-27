// loginReducer

import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/actions'

// UserReducer

import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
  USER_PROFILE_UPDATE,
  USER_PROFILE_UPDATE_FAIL,
} from '../constants/actions'

import {
  API_BASE_URL,
} from '../constants/url';

import axios from 'axios'

const baseUrl = API_BASE_URL;

// Login action

export const login = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${baseUrl}user/login`,
      { email, password },
      config
    )

    dispatch(loginSuccess(data))
    dispatch(userProfile(data.body.token))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// login success
export const loginSuccess = (data) => ({
  type: USER_LOGIN_SUCCESS,
  payload: data
})

// Logout action

export const logout = () => async (dispatch) => {
  dispatch(userLogout())
  dispatch(userProfileReset())
}

// User logout
export const userLogout = () => ({ type: USER_LOGOUT })

// User profile reset
export const userProfileReset = () => ({ type: USER_PROFILE_RESET })


// User's profile action

export const userProfile = (token) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${baseUrl}user/profile`, { token }, getConfig(token));
    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch(handleError(USER_PROFILE_FAIL, error));
  }
};

// User's update profile

export const updateProfile = (token, newFirstName, newLastName) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${baseUrl}user/profile`, { firstName: newFirstName, lastName: newLastName }, getConfig(token));
    dispatch(userProfileUpdate(data));
  } catch (error) {
    dispatch(handleError(USER_PROFILE_UPDATE_FAIL, error));
  }
};

// User profile update
export const userProfileUpdate = (data) => ({
  type: USER_PROFILE_UPDATE,
  payload: data
})

const handleError = (type, error) => ({
  type,
  payload: error.response && error.response.data.message ? error.response.data.message : error.message,
});

const getConfig = (token) => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});
