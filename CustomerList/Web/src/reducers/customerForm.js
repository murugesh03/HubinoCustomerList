const initialState = {
  userData: [],
  Api: [],
};
const customerForm = (state = initialState, action) => {
  switch (action.type) {
    case "POST":
      return { ...state, userData: [...state.userData, action.payload] };
    case "EDIT":
      return {
        ...state,
        userData: [action.payload, ...state.userData],
      };
    case "RETRIVE":
      return { ...state, Api: [...action.payload] };
    default:
      return state;
  }
};
export default customerForm;
