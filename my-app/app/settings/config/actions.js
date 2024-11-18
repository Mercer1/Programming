import { makeActionCreator } from '../../utils/utils'

export const USER_LOGIN_SESSION = 'USER_LOGIN_SESSION'
export const USER_LOGIN_SESSION_SUCCESS = 'USER_LOGIN_SESSION_SUCCESS'
export const USER_LOGIN_SESSION_ERROR = 'USER_LOGIN_SESSION_ERROR'
export const onUserLoginSession = makeActionCreator(USER_LOGIN_SESSION, 'payload')
export const onUserLoginSessionSuccess = makeActionCreator(USER_LOGIN_SESSION_SUCCESS)
export const onUserLoginSessionError = makeActionCreator(USER_LOGIN_SESSION_ERROR, 'payload')

export const onUserLoginSessionThunk = payload => async dispatch => {
  dispatch(onUserLoginSession())

  try {
    return dispatch(
      onUserl({
        initialSheet: {
          ...payload?.stepZero
        }
      })
    )
  } catch (err) {
    return dispatch(onCreateDirectDealStepZeroError({ err }))
  }
}