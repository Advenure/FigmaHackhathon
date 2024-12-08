import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function Footer(){
    return(
        <footer className="bg-[#2A254B] py-12 px-10 ">
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-2 ">
          <div>
            <h4 className="text-white text-lg mb-6">Use Cases</h4>
            <ul className="space-y-4">
              <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Web designers</a>
              </li>
              <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Marketers</a>
              </li>
              <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Small
                business</a></li>
              <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Themes</a></li>
              <li className="text-[15px]"><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Website
                builter</a>
              </li>
            </ul>
  
          </div>
  
          <div>
            <h4 className="text-white text-lg mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Landing page</a>
              </li>
              <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Popup builder</a>
              </li>
              <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Web design</a>
              </li>
              <li className="text-[15px]"><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Content</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-white text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Academy</a></li>
              <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Blog</a></li>
              <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Developer</a>
              </li>
              </ul>
            
          </div>
          <div className="bg-white  px-1 py-1 rounded- text-left w-full h-[40px] rounded-sm lg:mt-20 flex">
            
              <input type='email' placeholder='your@email.com' className="w-full outline-none bg-[#322d4d] pl-4 text-[15px]" />
              <button className="px-1  py-1 rounded ">SingUp</button>
              
            </div>
         
  
         
        </div>
        
  
        <hr className="my-12 border-gray-400" />
  
        <div className="grid max-md:grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            
          </div>
  
          
        </div>
        <div className="block lg:flex justify-between items-center text-white">
  
        <p className='text-[15px] mt-6'>© ReadymadeUI. All rights reserved.</p>
        <div className=" flex gap-5 text-2xl mt-5">
        <FaFacebook />
        <FaInstagram />
        <FaXTwitter />
        <FaLinkedin />
        </div>
        </div>

      </footer>
    )
}