export default function(state = { user: false },action) {
  switch(action.type) {
    case 'LOG_IN':
      return { user: action.payload }
    case 'LOG_OUT':
      return { user: false }
    default:
      return state;
  }
}
