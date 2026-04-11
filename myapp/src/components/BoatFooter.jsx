import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function BoatFooter() {
  return (
    <div>
      <div className='bg-sky-50  h-full  w-full  flex flex justify-around mt-10 '>
        <div className=''>
          <h1 className='font-bold text-7xl ml-9 pt-7 '>bo<span className='text-red-500'>A</span>t </h1>
          <h2 className='text-3xl pt-3 ml-9  font-bold '>Subscribe to our email alerts! </h2>
          <input className='border-2 border-xl   mt-3 rounded  w-[400px]  ml-9   pl-2 py-2' type="text" placeholder="Enter your email address " />
        </div>


        <div className='text-gray-800  flex mt-5 w-[700px] px-4 mt-1  mb-15'>
          <div className='flex justify-around  mt-6 pl-4  '>
            <div>
              <p>Shop</p>
              <ul className='mt-2'>
                <li className='mt-2'>True Wireless Earbuds</li>
                <li className='mt-2'>Wired Headhones</li>
                <li className='mt-2'>Home Audio</li>
                <li className='mt-2'>Dashcams</li>
                <li className='mt-2'>TRebel</li>
                <li className='mt-2'>Refer & Earn</li>
              </ul>
            </div>

            <div className='pl-4 mt-6 px-4 '>
              <ul>
                <li className='mt-2'> Wireless Headphones</li>
                <li className='mt-2'>Wireless Speakers</li>
                <li className='mt-2'>Smart Watch</li>
                <li className='mt-2'>Mobile Accessories</li>
                <li className='mt-2'>Misfit Tirmmers</li>

              </ul>
            </div>
            <ul>
              <p>Help</p>
              <li className='mt-2'> Track Your Order </li>
              <li className='mt-2'>Warranty & Support</li>
              <li className='mt-2'>Return Policy</li>
              <li className='mt-2'>Service Centers</li>
              <li className='mt-2'>Bulk Orders</li>
              <li className='mt-2'>Why Buy Direct</li>

            </ul>

          </div>






          <div className='mt-6 pl-4  '>
            <p>Company</p>
            <ul>
              <li> Track Your Order </li>
              <li>Warranty & Support</li>
              <li>Return Policy</li>
              <li>Service Centers</li>
              <li>Bulk Orders</li>
              <li>Why Buy Direct</li>

            </ul>
          </div>
        </div>


      </div>
      {/*  footer1.2 div1 */}
      <div className='bg-blue-50 pt-7  w-full  '>
        {/* div1 */}
        <div className='flex justify-around '>
          <div>
            <h2 className='font-bold  text-xl'> True Wireless Earbuds</h2>
            <p className='mt-7 text-gray-950  '>Shop by Features</p>
            <ul className='text-gray-500  text-sm  mt-2'>
              <li>Noise Cancellation Earbuds</li>
              <li>Best Immortal and Airpods</li>
              <li>Large Playback Earbuds </li>
            </ul>

            <p className='mt-7 text-gray-950  '> Shop by Price </p>
            <ul className='text-gray-500 text-sm mt-2 '>
              <li>Aribuds Under 1000</li>
              <li>Aribuds Under 2000</li>
              <li>Aribuds Under 3000</li>
              <li>Aribuds Under 4000</li>
              <li>Aribuds Under 5000</li>

            </ul>

          </div>

          {/* div2 */}
          <div>

            <h2 className='font-bold  text-xl '> Soundbars</h2>
            <p className='mt-7 text-gray-950  '>Shop by Features</p>
            <ul className='text-gray-500  text-sm  mt-2'>
              <li>Soundbars with wireless Subwofer</li>
              <li>Doily Soundbars</li>
              <li>Soundbars with wired Subwofer </li>
              <li>Alexa Enbled Soundbars</li>
            </ul>

            <p className='mt-5 text-gray-950   '> Shop by Price </p>
            <ul className='text-gray-500 text-sm mt-2 '>
              <li>Aribuds Under 5000</li>
              <li>Aribuds Under 10000</li>
              <li>Aribuds Under 20000</li>


            </ul>
          </div>


          {/* div3 */}
          <div>
            <h2 className='font-bold text-xl  '> Chargers</h2>
            <p className='mt-7 text-gray-950  '>Shop by Features</p>
            <ul className='text-gray-500  text-sm  mt-2'>
              <li>Wireless Charger </li>
              <li>Type C Charger </li>
              <li>Fast Charger </li>
              <li>USB Charger </li>
              <li>Micro USB Charger </li>
              <li>Type C Adapter</li>
            </ul>

          </div>
        </div>


        {/* footer1.3 div1*/}

        <div className=' '>
          <div className=''>
            <div className='flex justify-around '>
              <div>
                <h2 className='font-bold  text-xl mt-6 '>Smart Watches </h2>
                <p className='mt-7 text-gray-950  '>Shop by Features</p>
                <ul className='text-gray-500  text-sm  mt-2'>
                  <li>Fitness Tracker Smartwatch</li>
                  <li>Big Display Smartwatch </li>
                </ul>

                <p className='mt-7 text-gray-950  '> Shop by Identity </p>
                <ul className='text-gray-500 text-sm mt-2 '>
                  <li>Smartwatches For Women</li>
                  <li>Smartwatches For Men</li>

                </ul>

                <p className='mt-7 text-gray-950  '> Shop by Price </p>
                <ul className='text-gray-500 text-sm mt-2 '>
                  <li>Aribuds Under 2000</li>
                  <li>Aribuds Under 3000</li>
                  <li>Aribuds Under 4000</li>
                  <li>Aribuds Under 5000</li>
                  <li>Aribuds Under 10000</li>

                </ul>
              </div>

              {/* div2 */}
              <div>

                <h2 className='font-bold  text-xl  mt-5 '> Wireless Earphones</h2>
                <p className='mt-4 text-gray-950  '>Shop by Features</p>
                <ul className='text-gray-500  text-sm  mt-2'>
                  <li>Clear Calling Earphone</li>
                </ul>

                <p className='mt-5 text-gray-950   '> Shop by Price </p>
                <ul className='text-gray-500 text-sm mt-2 '>
                  <li>Aribuds Under 1000</li>
                  <li>Aribuds Under 2000</li>
                  <li>Aribuds Under 3000</li>


                </ul>

                <h2 className='font-bold  text-xl mt-7  '> Wireless Headphones</h2>
                <p className='mt-4 text-gray-950  '>Shop by Features</p>
                <ul className='text-gray-500  text-sm  mt-2'>
                  <li>Noise Cancelling Headphones</li>
                  <li>Long Playback Headphones</li>
                </ul>

                <p className='mt-5 text-gray-950   '> Shop by Price </p>
                <ul className='text-gray-500 text-sm mt-2 '>
                  <li> Wireless Headphones Under 3000</li>
                  <li> Wireless Headphones Under 4000</li>
                  <li> Wireless Headphones Under 5000</li>


                </ul>
              </div>
              {/* div3 */}
              <div>
                <h2 className='font-bold text-xl  '> Cables</h2>
                <p className='mt-7 text-gray-950  '>Shop by Features</p>
                <ul className='text-gray-500  text-sm  mt-2'>
                  <li>Lightning Cable </li>
                  <li>Type C Cable </li>
                  <li>USB Cable </li>
                  <li>Micro USB Cable </li>
                  <li>Type C Adapter</li>
                </ul>


                <h2 className='font-bold  text-xl mt-8  '> Wired Headphones</h2>
                <p className='mt-4 text-gray-950  '>Shop by Features</p>
                <ul className='text-gray-500  text-sm  mt-2'>
                  <li>Headphones with Mic For PC</li>

                </ul>

              </div>
            </div>

          </div>



        </div>




        <div>

        </div>




      </div>


       {/* footer body */}

      <div className="bg-sky-50 text-gray-600 text-center py-10 px-4">

        {/* Social Section */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg font-semibold text-gray-700">
            Let’s get social
          </p>
          <div className="flex gap-6 text-xl text-gray-700">
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaXTwitter className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
            <FaYoutube className="cursor-pointer hover:text-black" />
            <FaLinkedinIn className="cursor-pointer hover:text-black" />
          </div>
        </div>
        {/* Policy Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <span className="cursor-pointer hover:text-black">Privacy Policy</span>
          <span>•</span>
          <span className="cursor-pointer hover:text-black">Terms of Use</span>
          <span>•</span>
          <span className="cursor-pointer hover:text-black">Warranty Policy</span>
          <span>•</span>
          <span className="cursor-pointer hover:text-black">
            D2D Paid Repair Service Policy
          </span>
        </div>
        {/* Copyright */}
        <div className="mt-6 text-sm text-gray-500">
          © 2026 Imagine Marketing Limited. All Rights Reserved.
        </div>
        {/* Address */}
        <div className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto">
          For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205,
          2nd floor, D-wing & E-wing, Corporate Avenue, Andheri Ghatkopar Link Road,
          Mumbai, Maharashtra-400093, India
        </div>
      </div>

    </div>


  )
}

export default BoatFooter