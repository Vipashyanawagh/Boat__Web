import React from "react";

export default function SaleCards() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 ">
      
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          Sale <span className="border-b-4 border-red-500">Is Live</span>
        </h2>
        <p className="text-blue-600 font-medium cursor-pointer">View All →</p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-midnight_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmdmVWNWdHYnp5cHkwMldsSElEOHpyd0cyWGRFNFZ5QTk3bFlteis2Q2NNaWpENFdPQTN0TWQ4ejhtTWxrUHVDeElGZGV2eWhZaEljUzNSeDlxcDVuWGszbTFldUtUQzN0ellEWHZ3UUFYSS8"
            alt="product"
            className="w-full h-52 object-cover"
          />

          <div className="bg-yellow-400 px-3 py-2 flex justify-between text-sm font-semibold">
            <span>35 Hours Playback</span>
            <span className="bg-white px-2 rounded-lg">⭐ 4.9</span>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">
              boAt Airdopes Alpha
            </h3>

            <p className="text-xl font-bold">₹999</p>

            <p className="text-gray-400 line-through text-sm">
              ₹3,490
            </p>

            <p className="text-green-600 font-semibold text-sm">
              71% off
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0HvyZcBnGT6wlFCqokxoG0SkXHi4t_Cjfi7_ng3LPfZZkCu9vbWJZuxaKDnDMxGTMfDuGErXFTutnCGx9t-u6XxRfoHdR9PR4Ru8DQjvI8zTxNtR96jF7vkDxTb2Spbmx7CCg19ashx8&usqp=CAc"
            alt="product"
            className="w-full h-52 object-cover"
          />

          <div className="bg-yellow-400 px-3 py-2 flex justify-between text-sm font-semibold">
            <span>BT Calling</span>
            <span className="bg-white px-2 rounded-lg">⭐ 4.3</span>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">
              boAt Lunar Discovery
            </h3>

            <p className="text-xl font-bold">₹1,499</p>

            <p className="text-gray-400 line-through text-sm">
              ₹8,499
            </p>

            <p className="text-green-600 font-semibold text-sm">
              82% off
            </p>
          </div>
        </div>

        {/* Add more cards same way if needed */}
        {/* Card3  */}
       <div className ='bg-white rounded-2xl   shadow-md  '>
        <div>
          <img className='rounded-2xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dARd8W_onbDpJL5Xj4McmuwuEr1U4qaXmA&s"></img>
        </div>
        <div className='bg-yellow-400 px-3 py-2 flex justify-between text-sm font-semibold '>
           <span className='text-1 '>KeyChain Compatible </span>
           <span className='bg-white p-0.5 rounded-lg '> ⭐4.3 </span>
        </div>

        <div>
          <h3 className='font-semibold mb-3 mt-4.5 ml-1 '>boAt Avyukta AirPods Pro </h3>
        </div>
        <p className='font-bold text-xl  ml-2.5 '> ₹1549 </p>
        <p className='text-gray-400 line-through text-sm ml-3'> ₹9890</p>
        <p className='text-green-600 font-semibold text-sm ml-3 '>80% off </p>
       </div>

      {/*Cards 4 */}
       <div className ='bg-white rounded-2xl   shadow-md  '>
        <div>
          <img className='rounded-2xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeNGJ_-IdT7YCbi4E3EXof13JwpiHgEpJKPQ&s"></img>
        </div>
        <div className='bg-yellow-400 px-3 py-2 flex justify-between text-sm font-semibold '>
           <span className='text-1 '>KeyChain Compatible </span>
           <span className='bg-white p-0.5 rounded-lg '> ⭐4.3 </span>
        </div>

        <div>
          <h3 className='font-semibold mb-3 mt-4.5 ml-1 '>boAt Avyukta AirPods Pro </h3>
        </div>
        <p className='font-bold text-xl  ml-2.5 '> ₹1549 </p>
        <p className='text-gray-400 line-through text-sm ml-3'> ₹9890</p>
        <p className='text-green-600 font-semibold text-sm ml-3 '>80% off </p>
       </div>


      {/*Cards 4 */}
       <div className ='bg-white rounded-2xl   shadow-md  '>
        <div>
          <img className='rounded-2xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRwZjCSvvCv26zDQ_Wk9qDtRq1Xapz6YacQ&s"></img>
        </div>
        <div className='bg-yellow-400 px-3 py-2 flex justify-between text-sm font-semibold '>
           <span className='text-1 '>KeyChain Compatible </span>
           <span className='bg-white p-0.5 rounded-lg '> ⭐4.3 </span>
        </div>

        <div>
          <h3 className='font-semibold mb-3 mt-4.5 ml-1 '>boAt Avyukta AirPods Pro </h3>
        </div>
        <p className='font-bold text-xl  ml-2.5 '> ₹1549 </p>
        <p className='text-gray-400 line-through text-sm ml-3'> ₹9890</p>
        <p className='text-green-600 font-semibold text-sm ml-3 '>80% off </p>
       </div>

        {/*Cards 4 */}
       <div className ='bg-white rounded-2xl   shadow-md  '>
        <div>
          <img className='rounded-2xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMI0rEs2T7LDsdOOCC6qOIIgl0S3ffYFzZrw&s"></img>
        </div>
        <div className='bg-yellow-400 px-3 py-2 flex justify-between text-sm font-semibold '>
           <span className='text-1 '>KeyChain Compatible </span>
           <span className='bg-white p-0.5 rounded-lg '> ⭐4.3 </span>
        </div>

        <div>
          <h3 className='font-semibold mb-3 mt-4.5 ml-1 '>boAt Avyukta AirPods Pro </h3>
        </div>
        <p className='font-bold text-xl  ml-2.5 '> ₹1549 </p>
        <p className='text-gray-400 line-through text-sm ml-3'> ₹9890</p>
        <p className='text-green-600 font-semibold text-sm ml-3 '>80% off </p>
       </div>

      </div>
    </div>
  );
}