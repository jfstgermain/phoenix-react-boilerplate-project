import { push } from 'react-router-redux';
import { CommonConstants } from '../../../constants';
import { httpPost } from '../../../utils';
import { setCurrentUser } from '../../session/actions';

const Actions = {};

Actions.signUp = (data) => {
  return (dispatch) => {
    httpPost('/api/v1/registrations', { user: data })
    .then((data) => {
      localStorage.setItem('phoenixAuthToken', data.jwt);

      setCurrentUser(dispatch, data.user);

      dispatch(push('/'));
    })
    .catch((error) => {
      error.response.json()
      .then((errorJSON) => {
        dispatch({
          type: CommonConstants.REGISTRATIONS_ERROR,
          errors: errorJSON.errors,
        });
      });
    });
  };
};

export default Actions;
