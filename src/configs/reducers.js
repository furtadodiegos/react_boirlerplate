import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import { AuthReducers } from '../api/auth';

function responseMessages(state, action) {
  const { responseMessage } = action;

  const success = responseMessage ? responseMessage.success : '';
  const error = responseMessage ? responseMessage.error : '';

  return { success, error };
}

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    responseMessages,
    // auth: AuthReducers,
  });

export default createRootReducer;
