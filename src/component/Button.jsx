import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions";

function Button() {
  const dispatch = useDispatch();
  const [localCount, setLocalCount] = useState(1);

  const onIncrement = useCallback(() => {
    setLocalCount(localCount + 1);
    dispatch(actions.increment());
  }, [localCount, dispatch]);

  const onDecrement = useCallback(() => {
    setLocalCount(localCount - 1);
    dispatch(actions.decrement());
  }, [localCount, dispatch]);

  return (
    <div>
      <button onClick={onIncrement}>+</button> <button onClick={onDecrement}>-</button>
      <p>{localCount}</p>
    </div>
  );
}

export default Button;
