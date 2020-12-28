import React from "react";
import { useSelector } from "react-redux";
/**
 * useSelector를 통하여 store에 접근하여 변수를 가져올 수 있고
 * useDispatch를 통하여 직접 action creator들을 dispatch 시킬 수 있다.
 */
function Counter(props) {
  const { value: storeValue } = useSelector((state) => state.counter);
  return (
    <div>
      <h1>value : {storeValue}</h1>
    </div>
  );
}
export default Counter;
