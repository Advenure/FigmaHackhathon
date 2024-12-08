import Image from "next/image"
export default function BlogsFour(){
    return(
        <div className="w-full h-[744px]">
             <div><h1 className="text-2xl items-center font-bold ">Our popular products</h1></div>
            <div className="block md:flex justify-evenly">
                {/* Left side  */}
               <div className="justify-center mt-2">
<Image src={'/Product Card.png'}alt="rightsideimage" height={462} width={630}></Image>
               </div>
               {/* right side  */}
               <div className="block justify-center place-item-center md:flex gap-7  ">
               <Image src={'/Product Card.png'}alt="rightsideimage" height={462} width={305}></Image>
               <Image src={'/Product Card.png'}alt="rightsideimage" height={462} width={305}></Image>
               </div>
            </div>
    </div>
    )
}