export default function BlogsHome(){
    return(
        <div className=" bg-gray-100">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full ">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-12">New ceramics</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
             
            </div>

            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="\Photo.png" alt="Product 1"
                className="h-full w-full object-contain" />
            </div>

            <div>
              
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet consectetur </p>
              <h4 className="text-lg text-gray-800 font-bold mt-4">$10</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              
            </div>

            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="\Parent.png" alt="Product 2"
                className="h-full w-full object-contain" />
            </div>

            <div>
              
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet consectetur </p>
              <h4 className="text-lg text-gray-800 font-bold mt-4">$12</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
             
            </div>

            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="\Parent (1).png" alt="Product 3"
                className="h-full w-full object-contain" />
            </div>

            <div>
            
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet consectetur </p>
              <h4 className="text-lg text-gray-800 font-bold mt-4">$14</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
             
            </div>

            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="\Parent (2).png" alt="Product 3"
                className="h-full w-full object-contain" />
            </div>

            <div>
            
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet consectetur </p>
              <h4 className="text-lg text-gray-800 font-bold mt-4">$12</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}