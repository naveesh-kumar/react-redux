import React from 'react'
import ComponentB from './ComponentB';
import {useSelector} from "react-redux"

function ComponentA() {
  const count = useSelector(state => state.countReducer.count);
  return (
    <div>
      <h2>Count:{count}</h2>
      <ComponentB />
    </div>
  )
}

export default ComponentA;
