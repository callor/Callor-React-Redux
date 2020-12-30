export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const SET_DIFF = "counter/SET_DIFF";

/**
 * 프로젝트에서 사용할 event 함수 선언
 *
 * 여기에 선언된 event 함수는 dispatch()함수에게 전달할
 * action.type을 설정하는 일만 수행한다.
 */

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const setDiff = (value) => {
  return {
    type: SET_DIFF,
    diff: value,
  };
};
