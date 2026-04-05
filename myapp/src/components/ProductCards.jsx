import React from 'react'

function ProductCards() {
  return (
    <div className='min-h-screen bg-gray-100'>

      {/* Navbar */}
      <div className='justify-center'>
        <div className='p-5 flex justify-around shadow-lg bg-white'>
          
          <div>
            <img
              className='h-7 rounded-xl mt-1'
              src="data:image/png;base64,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"
              alt=""
            />
          </div>

          <button className='rounded-xl p-1.5'>Store</button>
          <button className='p-1.5 rounded-xl'>Mac</button>
          <button className='p-1.5 rounded-xl'>iPad</button>
          <button className='p-1.5 rounded-xl'>iPhone</button>
          <button className='p-1.5 rounded-xl'>Watch</button>
          <button className='p-1.5 rounded-xl'>AirPod</button>
          <button className='p-1.5 rounded-xl'>TV & Home</button>
          <button className='p-1.5 rounded-xl'>Entertainment</button>
          <button className='p-1.5 rounded-xl'>Accessories</button>
          <button className='p-1.5 rounded-xl'>Support</button>

        </div>
      </div>

      {/* Main Section */}
       <div className="bg-gray-100 min-h-screen flex flex-col justify-center px-10">

      {/* Image */}
      <div className="flex justify-center">
        <img
          src="https://www.apple.com/v/airpods-pro/r/images/overview/welcome/hero__b0eal3mn03ua_large.jpg"
          alt="AirPods Pro"
          className="w-[350px] md:w-[500px]"
        />
      </div>

          {/* Text Section */}
      <div className="mt-10">
        <h1 className="text-6xl font-bold text-gray-900">
          AirPods Pro 3
        </h1>

        <p className="text-xl text-gray-700 mt-3">
          The world’s best in-ear Active Noise Cancellation.
        </p>

        <p className="text-lg mt-4">
          ₹25900.00*     </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Learn more
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition">
            Buy
          </button>
        </div>
      </div>

    </div>
            </div>
  )
}

export default ProductCards