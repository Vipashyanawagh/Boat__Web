import React, { useState } from "react";

function UserForm() {

  const [formdata, setformdata] = useState({})

  function inputhandler(e){
    const name = e.target.name;
    const value = e.target.value;
    setformdata(values => ({...values, [name]: value}))
  }

  function submitHandler(e){
    e.preventDefault();
    console.log(formdata)
  }

  return (
    <div className='bg-gray-300 flex justify-center h-130'>
      <div className='bg-white w-90 rounded-xl mt-5'>
       
        {/* ✅ FIXED HERE */}
        <form className='w-80' onSubmit={submitHandler}>
          
          <h2 className='text-center text-2xl font-bold ml-8 pt-5'>Sign Up Form </h2>

          <div className='ml-5 mt-5'>
            <label>Username</label>
            <input 
              type="text" 
              placeholder="Enter Your Name"
              name="UserName"
              onChange={inputhandler}
              className='w-full p-2 border rounded-md mt-1'
            />
          </div>

          <div className='ml-5 mt-4'>
            <label>Email</label>
            <input 
              className='w-full p-2 border rounded-md mt-1' 
              type="email"
              placeholder="Enter Your Email" 
              name="email"
              onChange={inputhandler}
            />
          </div>
          
          <div className='ml-5 mt-4'>
            <label>Password</label>
            <input 
              className='w-full p-2 border rounded-md mt-1'
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={inputhandler}
            />
          </div>

          <div className='ml-5 mt-4'>
            <label>Phone Number</label>
            <input 
              className='w-full p-2 border rounded-md mt-1'
              type="tel"
              placeholder="Enter Your Phone Number"
              name="phone"
              onChange={inputhandler}
            />
          </div>

          <div className='ml-5 mt-4'>
            <button 
              className='w-full border p-2 rounded-md mt-5 text-white bg-blue-500 hover:bg-blue-600' 
              type="submit"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default UserForm;