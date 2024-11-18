import {
    USER_LOGIN_SESSION,
    USER_LOGIN_SESSION_ERROR,
    USER_LOGIN_SESSION_SUCCESS
  } from './actions'
  
  const userSessionTokenState = {
    userSessionToken: ''
  }
  
  /**
   * The DirectDealStepTwoReducer reducer.
   */
  const directDealStepTwoReducer = (state = userSessionTokenState, { payload, type }) => {
    switch (type) {
      case USER_LOGIN_SESSION: {
        return { ...state, loading: true }
      }
      case USER_LOGIN_SESSION_ERROR: {
        return { ...state, error: payload.error, loading: false, userSessionToken: null }
      }
      case USER_LOGIN_SESSION_SUCCESS: {
        return { ...state, error: undefined, loading: false, userSessionToken: payload }
      }
      default: {
        return state
      }
    }
  }
  
  export default directDealStepTwoReducer
  