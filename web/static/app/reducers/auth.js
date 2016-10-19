import { createReducer } from '../utils';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT
} from '../constants/common';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';

// see https://github.com/mjrussell/react-redux-jwt-auth-example/blob/react-router-redux/src/reducers/auth.js
//
const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null,
    socket: action.socket,
    channel: action.channel,
};

export default createReducer(initialState, {
    USER_LOGIN_REQUEST: (state, payload) => {
      return {
        ...state,
        isAuthenticating: true,
        statusText: null,
      });
    },
    USER_LOGIN_SUCCESS: (state, payload) => {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: payload.token,
        userName: jwtDecode(payload.token).userName,
        statusText: 'You have been successfully logged in.',
        socket: action.socket,
        channel: action.channel,
      });
    },
    USER_LOGIN_ERROR: (state, payload) => {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: `Authentication Error: ${payload.status} ${payload.statusText}`,
        socket: null,
        channel: null,
      });
    },
    USER_LOGOUT: (state, payload) => {
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        userName: null,
        statusText: 'You have been successfully logged out.',
        socket: null,
        channel: null,
      });
    }
});
