import Link from "next/link"
export default function Navbar3(){
    return(
        // <div className="w-full h-[50px] items-center justify-center ">
        //     <ul className="flex gap-4  justify-center ">
        //        <Link> <li>All products</li></Link>
        //         <li>Plant pots</li>
        //         <li>Tables</li>
        //         <li>Chairs</li>
        //         <li>Crockery</li>
        //         <li>Tableware</li>
        //         <li>Cutlery</li>
        //        </ul>
        // </div>
        <div className='hidden md:flex flex-wrap items-center gap-5 w-full justify-center h-[50px] bg-slate-100'>
       
          

          <ul className="flex gap-8 ">
            <li className='hover:underline'><Link href={"/whislist"} className=' text-gray-800 block  text-[15px]'>All products/Link</Link>   </li>
            <li className='hover:underline'><Link href={'/abouttwo'} className=' text-gray-800  text-[15px]' >Plant pots</Link>   </li>
            <li className='hover:underline'><Link href={'singup'} className=' text-gray-800 text-[15px]' >Tables</Link>   </li>
            <li className='hover:underline'><Link href={'/about'} className=' text-gray-800  text-[15px]' >Chairs</Link>   </li>
            <li className='hover:underline'><Link href={'/blogstwo'} className=' text-gray-800  text-[15px]' >Crockery</Link>   </li>
            <li className='hover:underline'><Link href={'/'} className=' text-gray-800  text-[15px]' >Tableware</Link>   </li>
            <li className='hover:underline'><Link href={'/'} className=' text-gray-800  text-[15px]' >Cutlery</Link>   </li>
           
          </ul>
        </div>

       
    
     
     
   
    )
}