
import Navbar from "@/components/Navbar";
import Carousel from "@/components/ui/Carousel";
import FeaturedComponents from "@/components/FeaturedComponents"
import HomeProductListings from "@/components/HomeProductListings"
import FooterBanner from "@/components/FooterBanner"
import Footer from "@/components/Footer"
export default function () {
  return (
    <div>
       <Navbar/>
       <div className="flex flex-col gap-4 ">
       <Carousel/>
       <FeaturedComponents/>
       <HomeProductListings/>
       <FooterBanner/>
       <Footer/>

       </div>
      
    </div>
   
    // <button className=" btn btn-primary"> hi</button>
  );
}

