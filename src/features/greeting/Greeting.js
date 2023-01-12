import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from './greetingSlice';
export function Greeting() {
const dispatch = useDispatch()
const data = useSelector(state => state.greeting)
const { pending } = data
useEffect(() => {
  if (pending){
    dispatch(getGreetings())
  }
}, [dispatch, pending])
  return (
    <div>
      <h1>Greetings</h1>
      <div>{data.greetings.map(greeting =>{
        return <p key={greeting.id}>{greeting.title}</p>
      })}</div>
    </div>
  );
}
