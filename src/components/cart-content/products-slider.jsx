import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import productImage from "../../assets/product-image-test.png";
function ProductsSlider() {
    return (
        <section className="w-full h-full products-slider mb-[72px]">
            <div className="container min-w-[100%] h-full">
                <div className="flex items-center justify-between w-full h-full col-heading">
                    <h2 className="text-sm font-bold uppercase text-textcolorPrimary">You might also like</h2>
                    <div className="flex next-prev-btns border-[1px] border-textColor w-[85px] h-9  pl-3 pr-3 rounded-[4px] justify-center items-center">
                        <div className="prev-btn border-r-[1px] border-textColor h-full flex justify-center items-center w-[50%] cursor-pointer">
                            <FaCaretLeft className="text-xl transition-colors duration-500 hover:text-textColor" />
                        </div>
                        <div className="next-btn w-[50%] flex justify-center items-center cursor-pointer">
                            <FaCaretRight className="text-xl transition-colors duration-500 hover:text-textColor" />
                        </div>
                    </div>
                </div>
                <div className="all-products">
                    <div className="flex gap-3 col-product">
                        <div className="col-image-product w-[90px] h-[120px] shadow-lg">
                            <img src={productImage} alt="product-img" className="object-contain w-full h-full" />
                        </div>
                        <div className="flex flex-col gap-3 information-product">
                            <p className="text-sm uppercase title-product text-textcolorPrimary">SHORT PRINTED DRESS</p>
                            <div className="flex justify-between content-price-rates">
                                <span className="text-sm font-bold price-product text-redcolor">₹69.99</span>
                                <span className="rate-product w-[32px] h-[15px] bg-redcolor text-center text-whiteColor text-[8px] flex justify-center items-center">- 40%</span>
                            </div>
                            <button className="add-to-cart flex items-center w-full border-[1px] border-borderColor h-[36px] rounded-[4px] justify-center gap-3 cursor-pointer">
                                <FiShoppingCart />
                                <p className="text-sm font-bold text-textcolorPrimary">Add to cart</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductsSlider;