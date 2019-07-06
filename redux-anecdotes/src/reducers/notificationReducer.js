
export const setSuccessNotification = (notification) => {
  return {
    type: 'SUCCESS',
    notification
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR',
    notification: ''
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