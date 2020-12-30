import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiff } from "../actions";

function Option(props) {
  const dispatch = useDispatch();
  const { diff: storeDiff } = useSelector((state) => state.counter);
  const onChange = useCallback(
    (event) => {
      dispatch(setDiff(parseInt(event.target.value)));
    },
    [dispatch]
  );

  return (
    <div>
      <input value={storeDiff} onChange={onChange} />
    </div>
  );
}

export default Option;
