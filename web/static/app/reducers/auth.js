// import { push } from 'react-router-redux';
// import jwtDecode from 'jwt-decode';
import { createReducer } from '../utils';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT
} from '../constants/common';

// see https://github.com/mjrussell/react-redux-jwt-auth-example/blob/react-router-redux/src/reducers/auth.js
//
const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  socket: null,
  channel: null,
};

export default createReducer(initialState, {
  USER_LOGIN_REQUEST: (state) => {
    ...state,
    isAuthenticating: true,
    statusText: null,
  },
  USER_LOGIN_SUCCESS: (state, payload) => {
    ...state,
    isAuthenticating: false,
    isAuthenticated: true,
    token: payload.token,
    userName: jwtDecode(payload.token).userName,
    statusText: 'You have been successfully logged in.',
    socket: payload.socket,
    channel: payload.channel,
  },
  USER_LOGIN_ERROR: (state, payload) => {
    ...state,
    isAuthenticating: false,
    isAuthenticated: false,
    token: null,
    userName: null,
    statusText: `Authentication Error: ${payload.status} ${payload.statusText}`,
    socket: null,
    channel: null,
  },
  USER_LOGOUT: (state, payload) => {
    ...state,
    isAuthenticated: false,
    token: null,
    userName: null,
    statusText: 'You have been successfully logged out.',
    socket: null,
    channel: null,
  }
});
