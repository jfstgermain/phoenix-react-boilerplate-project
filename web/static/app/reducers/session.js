import {CommonConstants} from '../constants';

const initialState = {
  currentUser: null,
  socket: null,
  channel: null,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CommonConstants.CURRENT_USER:
      return { ...state, currentUser: action.currentUser, socket: action.socket, channel: action.channel, error: null };

    case CommonConstants.USER_SIGNED_OUT:
      return initialState;

    case CommonConstants.SESSIONS_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
}
