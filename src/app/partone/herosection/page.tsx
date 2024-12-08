import Image from "next/image"
export default function HeroSection(){
    return(

<div className="text-white ">
      <div className="grid lg:grid-cols-2 items-center lg:gap-y-6  bg-[#2A254B]">
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4 ">
          <h2 className="lg:text-xl text-xl ">The furniture brand for the future, with timeless designsFrom a studio in London to a global brand with
          </h2>
          <button type='button'
            className="hover:-translate-y-2 transition-all border-2  border-gray-800 mt-5  font-bold text-sm rounded-md px-6 py-2.5  bg-gray-600">Get Started</button>
          <p className=" m text-base leading-relaxed mt-20">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, </p>
         
          
        </div>

        <div className="lg:h-[480px] flex items-center place-items-center justify-center ">
          {/* <img src="\Right Image.png" className="w-full h-full " alt="Dining Experience" /> */}
          <Image src={"/Right Image.png"} alt="logo" height={100} width={400} className=" place-items-center justify-center"></Image>
        </div>
    
        
        </div>
       
      </div>

    )
}
