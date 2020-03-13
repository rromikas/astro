import { createStore } from "redux";

function userReducer(
  state = { username: "", avatar: "", id: "", email: "" },
  action
) {
  switch (action.type) {
    case "SET_USER":
      return action.user;
    default:
      return state;
  }
}

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
