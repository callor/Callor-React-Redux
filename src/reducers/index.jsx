import { combineReducers } from "redux";
import objReducer from "./objReducer";
import spreadReducer from "./spreadReducer";

/**
 * combineRecucers 메소드는 여러개의 reducer을 하나로 합쳐주는 메소드.
 * 현재 예시는 하나의 reducer만 필요하기 때문에 위와 같이 작성 되었지만,
 * 여러개의 reducer가 있다면, 아래와 같이 작성 한다.
 * const counterApp = combineReducers({
 *      counter,
 *       etc
 * });
 *
 * reducer에 다른 key를 주고 싶다면 아래와 같이 사용한다.
 * const counterApp = combineReducers({
 *      a: counter,
 *      b: etc
 * });
 */
const counterApp = combineReducers({
  counter: objReducer,
  spreadReducer,
});

export default counterApp;
