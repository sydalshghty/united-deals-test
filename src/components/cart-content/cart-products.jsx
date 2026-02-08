import { FaPlus, FaMinus, FaCheck } from "react-icons/fa6";
import deleteIcon from "../../assets/trash.svg";
import productImgTest from "../../assets/Image-product1.png";
import IconShopSummary from "../../assets/Icon-shop-summary.svg";
import { useState } from "react";
function CartProducts() {
    const [quantitProduct, setQuantityProduct] = useState(1);
    const minusProduct = () => {
        if (quantitProduct == 1) {
            return false
        } else {
            setQuantityProduct(quantitProduct - 1);
        }
    }

    return (
        <section className="w-full h-full cart-products mb-[72px] overflow-hidden">
            <div className="container min-w-[100%] h-full flex gap-[60px] flex-wrap">
                <div className="all-products-cart">
                    <div className="col-number-items flex items-center gap-[5px] mb-[33px]">
                        <h2 className="text-xl font-bold text-textcolorPrimary">Number of Items</h2>
                        <span className="text-lg number-items text-textcolorLight">3</span>
                    </div>
                    <div className="all-products flex flex-col gap-[25px]">
                        <div className="flex w-full col-product gap-[85px] items-center">
                            <div className="flex items-center gap-4 image-title-product">
                                <div className="image-product min-w-[90px] h-[72px] shadow-lg p-[2px] rounded-[10px] border-[1px] border-textColor flex justify-center items-center">
                                    <img src={productImgTest} alt="img-product" className="object-contain w-full h-full" />
                                </div>
                                <h2 className="text-[15px] font-bold text-textcolorPrimary">2 Pieces Mango</h2>
                            </div>
                            <span className="price-product text-[15px] text-colorPrice">₹25.99</span>
                            <div className="flex items-center col-quantity w-[105px] h-[42px] pt-[10px] pb-[10px] pl-[16px] pr-[16px] border-[1px] border-textColor rounded-[4px] gap-[10px] justify-center">
                                <FaMinus className="transition-colors duration-500 cursor-pointer hover:text-textcolorLight"
                                    onClick={() => {
                                        minusProduct();
                                    }}
                                />
                                <span className="number-quantity text-[15px] text-textcolorPrimary">{quantitProduct}</span>
                                <FaPlus className="transition-colors duration-500 cursor-pointer hover:text-textcolorLight"
                                    onClick={() => {
                                        setQuantityProduct(quantitProduct + 1);
                                    }}
                                />
                            </div>
                            <span className="total-price-product text-[15px] text-colorPrice">{`₹${25 * quantitProduct}`}</span>
                            <div className="cursor-pointer delete-product">
                                <img src={deleteIcon} alt="delete-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-sm order-summary bg-bgSummary w-[309px] h-[365px] pt-5 pb-5 pl-10 pr-10 rounded-lg flex flex-col gap-7">
                    <h2 className="text-base font-bold text-textcolorPrimary">Order Summary</h2>
                    <div className="flex flex-col w-full gap-3 content-information-order">
                        <div className="flex items-center justify-between w-full h-full col-price">
                            <p className="text-sm font-medium text-colorPrice">Price</p>
                            <span className="text-sm font-medium text-colorPrice">₹99.23</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-shipping">
                            <p className="text-sm font-medium text-colorPrice">Shipping</p>
                            <span className="text-sm font-medium text-colorPrice">₹0</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-tax">
                            <p className="text-sm font-medium text-colorPrice">Tax</p>
                            <span className="text-sm font-medium text-colorPrice">₹0</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-discount-price">
                            <p className="text-sm font-medium text-colorPrice">Discount price</p>
                            <span className="text-sm font-medium text-colorPrice">₹47.10</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full col-gift-box">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-5 h-5 col-checkbox bg-bgshopnow">
                                    <FaCheck className="text-white" />
                                </span>
                                <p className="text-sm font-medium text-colorPrice">Pack in a Gift Box</p>
                            </div>
                            <span className="text-sm font-medium text-colorPrice">₹10.90</span>
                        </div>
                        <div className="flex items-center justify-between w-full h-full pt-2 border-t-2 col-total-price border-textColor">
                            <p className="text-sm font-bold text-textcolorPrimary">Total Price</p>
                            <span className="text-sm font-bold text-textcolorPrimary">₹110.13</span>
                        </div>
                    </div>
                    <button className="shop-now w-full h-[52px] bg-bgshopnow pt-4 pb-4 pl-8 pr-8 rounded-lg flex justify-center items-center gap-2">
                        <img src={IconShopSummary} alt="icon-shop" />
                        <span className="text-sm font-medium text-white">Shop now</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default CartProducts;  