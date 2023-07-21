import { createStore } from "redux";

const initialState = {
  x: 10,
};

function reducer(state = initialState, action) {
  if (action.type === "add") {
    //
    console.log("add, ashxatec reduxy");
    return {
      x: state.x + 1,
    };
  }
  return state;
}

const store = createStore(reducer);

export default store;
