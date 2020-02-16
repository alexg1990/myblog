import { SET_SCROLL_DIRECTION } from "./actions";

const initialState = {
  scrollDirection: "up",
  prevOffset: 0
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SCROLL_DIRECTION:
      if (action.currOffset > state.prevOffset) {
        return Object.assign({}, state, {
          scrollDirection: "down",
          prevOffset: action.currOffset
        });
      } else {
        return Object.assign({}, state, {
          scrollDirection: "up",
          prevOffset: action.currOffset
        });
      }
    default:
      return state;
  }
}
