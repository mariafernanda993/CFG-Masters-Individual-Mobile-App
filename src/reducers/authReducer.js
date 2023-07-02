const initialState = {
    username: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          username: action.payload, //update username to the payload value (logged-in username) if action = LOGIN
        };
      case 'LOGOUT':
        return {
          ...state,
          username: null, //reset username to null if action = LOGOUT
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  