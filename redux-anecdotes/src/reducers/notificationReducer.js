
export const setSuccessNotification = (notification, time) => {
  return async dispatch => {
    dispatch({
      type: 'SUCCESS',
      notification
    })
    await new Promise((resolve) => setTimeout(() => {
      resolve()
    }, time * 1000))
    dispatch({
      type: 'CLEAR',
      notification: ''
    })
  }
}

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SUCCESS':
      return action.notification
    case 'CLEAR':
      return action.notification
    default:
      return state
  }
}

export default notificationReducer