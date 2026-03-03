import React from 'react'

function Cards1Columns() {
  return (
    <div className='bg-white  h-screen  '>
       
       <div className='pt-10 pl-10  '>
        <div className='bg-gray-50   h-65  w-120   flex justify-around   gap-8  rounded-2xl border-2-white  shadow-md  outline-2 outline-offset-2 outline-gray-200   '>
           <div>
            <div className='rounded-xl '>
                <img  className=' h-50  rounded-xl  mt-2.5  pl-2.5    ' src="data:image/jpeg;base64,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"></img>
             
            


             </div>
            
             

             

             </div>
          
            <div className=' mt-3 '>
               <div className='flex mt-2.5 gap-2.5 '> 
                  <p classame=' '>⭐ 4.7 </p>
                  <div className='flex gap-1 border-xl'>
                <p className=' '>35</p>
                <img  className='h-5 mt-0.5 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQMuN0WD8cozlKwdJE-wUdg_gA0hrobIN9raJqIb1fg&s"></img>
                </div>
                </div>
                
                <h2 className=' font-semibold mt-2 ' >boAt Rockerz 425 </h2>
                <div className='flex mt-5 gap-1.5  '>
                  
                <p className='font-semibold '>₹1600 </p>
                <p className='text-gray-400 line-through text-sm  mt-1 '>₹2,999 </p>
                <p className='text-green-400  text-sm mt-1 '>43% off</p>
                </div>
                  <p>__________________________________</p>
             <div className=' '>
                <button className='border-2-none  rounded-2xl px-2 mt-4 text-sm bg-blue-100 py-0.5 '>BEST Mode </button>
                <button className='border-none rounded-2xl text-sm  bg-blue-100 ml-3 px-1.5 py-0.5  '>40mm drivers </button>
                <button className='bg-black rounded-lg  mt-3 px-20 text-white  py-2 '>Add To Cards </button>
               </div> 
            </div>
        </div>
        </div>


   <div className=''>
      <div >
     <img src=''></img>

      </div>

      <div></div>
   </div>
    </div>
  )
}

export default Cards1Columns