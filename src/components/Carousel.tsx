import Image from "next/image"
import Link from "next/link";
export default function Carousel({Images}:{Images:string[]}){
    return(
        <>
            <div className=" carousel w-full h-full">
                {
                    Images.map((img,ind)=>{
                        return (<>
                            <div id={`item${ind+1}`} key={`item${ind+1}`} className="carousel-item w-full">
                            <Image src={img} className="w-full border border-[#ECECEC] shadow-sm shadow-[#F2F3F4] p-4 rounded-md" alt="product image" width={324} height={384}></Image>
                            </div>
                        </>)
                    })
                }
            {/* <div id="item1" className="carousel-item w-full">
                <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                className="w-full" />
            </div>
            <div id="item2" className="carousel-item w-full">
                <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
                <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
                <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full" />
            </div> */}
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
            <Link href="#item1" className="btn btn-xs">1</Link>
            <Link href="#item2" className="btn btn-xs">2</Link>
            <Link href="#item3" className="btn btn-xs">3</Link>
            <Link href="#item4" className="btn btn-xs">4</Link>
            </div>
        </>
    )
}