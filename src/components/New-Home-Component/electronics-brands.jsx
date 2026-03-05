import ViewAllButton from "./view-all-btn";
import brandImg1 from "../../assets/brand-img-1.png";
import brandImg2 from "../../assets/brand-img-2.png";
import brandImg3 from "../../assets/Group 214.png";
function ElectronicsBrands() {
    return (
        <section className="w-full h-full electronics-brands mt-[72px] mb-[72px]">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between w-full col-heading border-b-[1px] border-textColor pb-5">
                    <h1 className="sm:text-[22px] md:text-[25px] lg:text-[28px] font-bold text-headingcolor uppercase">Top <span className="text-starColor">Electronics Brands</span></h1>
                    <ViewAllButton />
                </div>
                <div className="flex flex-wrap w-full h-full mt-5 all-brands">
                    <img src={brandImg3} alt="brand-img" />
                    <img src={brandImg1} alt="brand-img" />
                    <img src={brandImg2} alt="brand-img" />

                </div>
            </div>
        </section>
    )
}
export default ElectronicsBrands;