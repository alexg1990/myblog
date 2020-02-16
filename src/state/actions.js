export const SET_SCROLL_DIRECTION = "SET_SCROLL_DIRECTION";

export function setScrollDirection(currOffset) {
  return {
    type: SET_SCROLL_DIRECTION,
    currOffset: currOffset
  };
}
