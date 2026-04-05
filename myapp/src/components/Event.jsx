import React from 'react'

function Event() {

var name="Dipu "

function abc(){
    alert("Function is called succesfully")
}

function xyz(a,b){
    alert(`Sum of two numbers is ${a+b}`)
}

function getvalue(e){
    console.log(e.target.value )
}
  return (
  <>
    <h1> My name is {name}</h1>

    <input type="text" onChange={getvalue } className='border py-1 px-2 rounded-2xl '/>
   <button onClick={abc()} className='border-2 bg-blue-500 p-3 rounded-xl text-white '>Click Here </button>
  <button  onClick={()=>xyz(15,10)}className='border-2 bg-red-400 rounded-xl text-white p-3 '> Click here</button>
  </>
)
}

export default Event