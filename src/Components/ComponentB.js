import React from 'react'
import {useSelector, useDispatch} from "react-redux"

function ComponentB() {

  const count = useSelector(state => state.countReducer.count);
  const dispatch = useDispatch();
  
  const incrementHandler = () =>{
    dispatch({
      type:"INCREMENT"
    })
  }

  const decrementHandler = () =>{
    dispatch({
      type:"DECREMENT"
    })
  }

  return (
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  )
}

export default ComponentB
