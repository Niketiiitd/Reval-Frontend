"use client"
import api from "@/app/utils/api";
import CarbonSavings from "@/components/CarbonSavings";
import Carousel from "@/components/Carousel";
import CategoryTags from "@/components/CategoryTags";
import Navbar from "@/components/Navbar";
import ShippingInfo from "@/components/ShippingInfo";
import { ImageError } from "next/dist/server/image-optimizer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page({params}:{params:{productId:string}}) {
    // console.log(params.productId);
    // const pId = await 
    // const data = {
    //     title:"Seeds of Change Organic Quinoa, Brown",
    //     imgUrls:["https://images.freshop.com/1564405684714879555/a50049112b668a9799a7010f480f5570_large.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFDAtJFPRlTCeRWOka_-gyweX1xyecQUZuOxZXob9mNcyGdrtPfLOj6oGXRiQfsat1eVk&usqp=CAU","https://images.freshop.com/1564405684714879555/a50049112b668a9799a7010f480f5570_large.png","https://images.freshop.com/1564405684714879555/a50049112b668a9799a7010f480f5570_large.png"],
    //     price:500,
    //     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vero eos blanditiis ratione cupiditate nobis sint odit tenetur ducimus, corporis distinctio deserunt soluta magnam maiores, quisquam sapiente modi harum adipisci!",
    //     categories:["healthy","food","keto"]
    // }
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/api/v1/product/67a7e15054f63389a94a2ee2`,{withCredentials:true}); // Replace with actual API URL
                const product = response.data.product;
                console.log(product);
                
                const extractedData = {
                    title: product.name,
                    imgUrls: product.images,
                    price: product.discountPrice,
                    description: `${product.name} in the ${product.mainCategory} category. Discounted price: $${product.discountPrice} (Actual price: $${product.actualPrice}).`,
                    categories: [product.mainCategory]
                };

                setData(extractedData);
            } catch (err) {
                setError("Failed to fetch product data");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);
    return(<>
    <div className=" flex flex-col justify-center items-center gap-4">
        <Navbar/>
        <div className=" w-full flex flex-row justify-around">
            <div className=" flex flex-col items-center gap-12">
                <div className="   w-80 h-72">
                    <Carousel Images={data?.imgUrls}/>
                </div>
                {/* <div className=" self-center flex flex-col border border-[#ECECEC] mx-2 shadow-lg shadow-[#F2F3F4] p-4 rounded-md gap-2  w-52 h-72">
                    <h3 className=" text-lg font-medium items-center self-center">Category</h3>
                    <div className="h-[3px] w-1/2 bg-[#BCE3C9]"></div>

                    {data.categories.map((c) => {
                        return (
                            <div key={c} className="flex flex-row gap-1 font-normal">
                            <img src="/category.png" alt="Category" />
                            <p>{c}</p>
                            </div>
                        );
                    })}
                </div> */}
                <CategoryTags categories={data?.categories}/>
            </div>
            {/* <div className=" flex flex-col w-64 mx-2 gap-5"> */}
                <div className=" flex flex-col w-72 h-96 gap-2">
                    <p className="text-xs text-center p-1 bg-error w-14 font-semibold text-[#F74B81] rounded-md">Sale off</p>
                    <p className=" font-bold text-2xl">{data?.title}</p>
                    <p className=" text-primary text-xl font-extrabold">${data?.price}</p>
                    <p className=" text-xs text-[#7E7E7E] text">{data?.description}</p>
                    <div className=" flex flex-row gap-1 items-center">
                    <button className="btn btn-primary btn-sm w-28 text-xs flex items-center justify-center gap-2 p-2">
  <Image src="/vector.png" height={20} width={15} alt="cart" />
  Add to cart
</button>
                        <Image className=" h-4 w-4" src={"/like.png"} height={15} width={15} alt="add to favs"></Image>
                    </div>
                    <div>Product history</div>
                </div>
            {/* </div> */}

            <div className=" flex flex-col w-64 mx-2 gap-5">
                <CarbonSavings savedKg={100}/>
                
                <ShippingInfo/>
            </div>
        </div>
    </div>
    </>)
}