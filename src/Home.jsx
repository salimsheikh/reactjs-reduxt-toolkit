import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispath = useDispatch();

  const counter = useSelector((state) => state.root.c)
  console.log(counter);
  return (
    <div>
        <h2>Home</h2>
        <div>counter: {counter}</div>
        <div>
              <button onClick={()=> dispath({type:'INCREAMENT'})}>Increament +</button>
              <button onClick={()=> dispath({type:'INCREAMENT25',payload: 25})}>Increament 25</button>
              <button onClick={()=> dispath({type:'DECREAMENT'})}>Decreament -</button>
        </div>
    </div>
  )
}

export default Home