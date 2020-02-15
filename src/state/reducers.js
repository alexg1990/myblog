import TEST_ACTION from "./actions";

const initialState = {
  test: "hi"
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return Object.assign({}, state, { test: "working" });
    default:
      return state;
  }
}
