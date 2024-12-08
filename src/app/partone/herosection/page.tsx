import Image from "next/image"
export default function HeroSection(){
    return(
//         <div className="bg-[#2A254B] grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
//       <div className=" text-white max-md:order-1 max-md:text-center">
        
//         <div className="mt-2 max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
//         <p className="mt-2  text-xl leading-relaxed">The furniture brand for the future, </p>
//         <p className="mt-2 mb-5 text-xl leading-relaxed">future, with timeless designs</p>
//         <div>
//         <button className="px-6 py-3  text-base  bg-[#4E4D93] rounded-sm  ">View collection</button>
//         </div>
         
//         </div >
//         <div className="mt-20">
//         <p className="mt-20  leading-relaxed">A new era in eco friendly furniture with Avelon, the French luxury retail brand
// with nice fonts, tasteful colors and a beautiful way to display things digitally 
// using modern web technologies.</p>
//         </div>
//       </div>
//       <div className="md:h-[450px]">
//         <img src="/Right Image.png" className=" w-full h-full object-cover rounded-lg shadow-xl " alt="Dining Experience" />
//       </div>
//     </div>
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
