import React from 'react'

function ProductCards() {
  return (
    <div className=' h-screen bg-gray-100 '>
     

      <div className='justify-center' >
       

        <div className=' p-5  flex justify-around shadow-lg  bg-white ' >
          
        <div>
          <img className='min-w-1 h-7 rounded-xl mt-1 ' src="https://thumbs.dreamstime.com/b/apple-company-logo-vector-printable-mobile-laptop-stickers-cups-mugs-182823911.jpg"></img>
         </div>
       
            <button className='border-2-none rounded-xl p-1.5 '>Store</button>
            <button className='border-2-none p-1.5 rounded-xl'>Mac</button>
            <button className='border-2-none p-1.5 rounded-xl'>iPad</button>
            <button className='border-2-none  p-1.5 rounded-xl'>iPhone</button>
            <button className='border-2-none  p-1.5 rounded-xl'>Watch</button>
            <button className='border-2-none  p-1.5 rounded-xl'>AirPod</button>
            <button className='border-2-none p-1.5 rounded-xl'>TV & Home</button>
            <button className='border-2-none  p-1.5 rounded-xl'>Entertainment</button>
            <button  className='border-2-none  p-1.5  rounded-xl'>Accessories</button>
            <button className='border-2-none  p-1.5 rounded-xl'>Support</button>
          
          
         </div>
      </div>
       
       <div className='bg-amber-300 flex justify-center'>
     
       <div><img className='min-w-1 h-10 rounded-xl mt-5 ml-2 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ubbhhf9ElCzrncdYx5p14G-R120KMYprJA&s"></img>
      <h5  className='mr-5 text-sm/6 '>AirPods</h5>
       </div>
     <div><img  className='min-w-1 h-10 rounded-xl mt-5 ml-9  'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfnGBgikOe_NB9heEbIsJv0lqYJOKJ1Q9Fw&s"></img>
     <h5 className='ml-5 text-sm/6 '>AirPods Pro</h5>
     <p className='ml-10 text-sm/6 text-amber-700'>New</p>
     </div> 
     <div>
      <img  className='min-w-4 h-10 rounded-xl mt-5 mr-5 ml-10 'src="https://finebuy.co.in/wp-content/uploads/2025/01/headphone-4.webp"></img>
     <h5 className='ml-5 text-sm-6 text-sm/6 '>AirPods Max</h5>
     </div>
     <div>
      <img className='min-w-1 h-10 rounded-xl mt-5 ml-9 ' src="data:image/png;base64,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"></img>
     <h5 className='ml-5 text-sm/6 '>Apple Music</h5>
     </div>
       
       </div>

       <div className='bg-white mt-5 p-5 flex justify-center shadow-md '>
        <p>Get up to ₹4000 instant cashback on AirPods with eligible cards. Plus up to 6 
          months of No Cost Emi.
        </p>
       </div>

       <div className='bg-white mt-3 h-500 '>
        <div className = 'flex justify-center items-center  '>
          <img  className='mt-5 text-9*1' src="data:image/jpeg;base64,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EBERAREQEREBERAREQEREHiX6rA5Zp9PFRytQYpFCmU2RQpkRXVKU3tM6hKhKbVngg29ERZUVfjn3XvD5FWCr8c+694fIpBrZ1HT6qbTqE7UdPqptOtInwqUxRYVKYgytUlRAVLUqiIigIiICIiAiIgIiICIiAiIgIiICIiAiIgxT6eKjqRUnIdfoobpFqD5Iocyyyzjmtdx/aqionBlRURRyPbvNY4u3i29t7IGwuDryKImVC+U2rOoWrN26o5XBjHtkJ0EcjHuPukgrZKOoaXRi+bgCAdbIN1REWVFX45917w+RVgq3H3AREnIBwJPACxQa67UdPqptOqDFMZjp2tldcsIOY3bADiSSLBV9N6Q8OHt1ELB/qb58mgrWo32FSmKnwzEop42TRSMkikF2PYbtcL2OfUEeCso5ggkqYoDXKepVERFAREQEREBERAREQEREBERAREQEREBERBgrfZJ5ZrXK2u3VtJF8jxWt4vgbyS5l3DkPaHhxVGsVuLyBxLbOHImxC1XaOhp654mmp9+URiPebO+O7QSRcAgH2itumwg39YEHkRZYf8ABh3ojk9dsozeuKaq3OLY54X3Hd6jnD4rf9gXVFVVxFzHNZE5znZODWNsQIxfle3QLZKPZl7yLA25kWHmtywfCWUzbDNx1d9AoqxREQFVbU0rpqWdjPb3CW8LkDRWqIPzRjcctWOwlhnd2TwWbnqOicLhwdvNIsQe72RnqD8wvZWAAdrTSnnv1TQf+nZdwxvZgPJfHx1by6LXJcBLTZwIPeLKiqwisFLDHTwRBkUe9ugyFxu5xc4knM5krYcNxQ29Y5nloFBbg4U6iwV7iN1rj32y80RsVBPvkDmVequwnDuxF3G7vgFYpVERFAREQEREBERAREQEREBERAREQEREBERAREQYanRRKbVfUVFgiIoCIiAiIgLHPoURBBh1VkERAREQEREBERAREQEREBERB//Z"></img>
        </div>
        <div>
          <h1 className='text-8xl ml-5 '>AirPods Pro 3 </h1>
          <h2 className='font-semibold text-2xl ml-5 mt-2'>The World's best in-ear Active Noise Cancellation.</h2>
         
         <div className='flex '>
         <h4 className='ml-5 mt-3'>₹25900.0 *</h4>
       
        <button className='ml-270 border-2-none  pl-4 pr-4   rounded-full bg-blue-500 text-white  '>Learn More</button>
         <button className='border-2 rounded-full   pl-3.5  pr-3.5 m-1.5 text-blue-500 '>Buy</button>
        
        
         </div>
         
        </div>
       </div>
        <div>
        <h1>Sale Is Live</h1>
      </div>


    </div>
  )
}

export default ProductCards