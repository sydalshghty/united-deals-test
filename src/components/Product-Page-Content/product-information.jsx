import productImgTest from "../../assets/Image-product3.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar, FaFacebook, FaTwitter, FaPinterestP } from "react-icons/fa";
import localOfferIcon from "../../assets/Local offer.svg";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { RxCopy } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";
function ProductInformation() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const getProductData = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        const data = await res.json();

        setProduct(data);
    }

    useEffect(() => {
        getProductData();
    }, [])

    console.log(product);

    return (
        <section className="w-full h-full mt-5 mb-5 product-information-section">
            <div className="container min-w-[100%] h-full">
                {Object.keys(product).length === 0 ?
                    <div className="col-loading w-full min-h-[500px] flex justify-center items-center">
                        <OrbitProgress color="#FA8232" size="medium" text="" textColor="" />
                    </div>
                    :
                    <section className="flex w-full h-full section-information-product gap-[51px] pt-[29px] pb-[29px]">
                        <div className="content-product-images w-[50%]">
                            <div className="all-images-product w-full flex flex-col gap-[22px]">
                                <div className="col-main-img w-full h-[422px] border-[1px] border-gray100 rounded-[4px]">
                                    <img src={product.images[0]} alt="main-product-img" className="object-contain w-full h-full" />
                                </div>
                                <div className="flex items-center justify-center small-images-product">
                                    <button className="left-btn w-[44px] h-[44px] bg-bgbutton rounded-full flex justify-center items-center">
                                        <FaArrowLeft className="text-white" />
                                    </button>

                                    <div className="flex gap-2 all-images-small">
                                        {product.images.map((img, index) => {
                                            return (
                                                <div className="col-img w-[87px] h-[87px] border-[1px] border-gray100 rounded-sm cursor-pointer" key={index}>
                                                    <img src={img} alt="product-img" className="object-contain w-full h-full" />
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <button className="right-btn w-[44px] h-[44px] bg-bgbutton rounded-full flex justify-center items-center">
                                        <FaArrowRight className="text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="content-product-information w-[50%]">
                            <div className="col-rates">
                                <div className="all-stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <span>{`${product.rating} Star Rating`}</span>
                                <span>(21,671 User feedback)</span>
                            </div>
                            <h1 className="titl-product">{product.title}</h1>
                            <div className="information-product">
                                <div className="col-sku-availability">
                                    <div className="col-sku">
                                        <p>Sku:</p>
                                        <span>{product.sku}</span>
                                    </div>
                                    <div className="col-availbility">
                                        <p>Availability:</p>
                                        <span>{product.availabilityStatus}</span>
                                    </div>
                                </div>
                                <div className="col-brand-category">
                                    <div className="col-brand">
                                        <p>Brand:</p>
                                        <span>{product.brand}</span>
                                    </div>
                                    <div className="col-category">
                                        <p>Category:</p>
                                        <span>{product.category}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-price">
                                <span className="price-product">{`₹${product.price}`}</span>

                                <div className="col-off">21% OFF</div>
                            </div>
                            <div className="col-get-deal-cart">
                                <div className="col-get">
                                    <img src={localOfferIcon} alt="icon" />
                                    <p>Get DEAL ( ₹90k )</p>
                                </div>
                                <div className="col-cart">
                                    <FiShoppingCart />
                                    <p>add to cart</p>
                                </div>
                            </div>
                            <div className="col-wishlist-share">
                                <div className="col-wishlist">
                                    <FiHeart />
                                    <span>Add to Wishlist</span>
                                </div>
                                <div className="col-share">
                                    <span>Share product:</span>
                                    <div className="social-icons">
                                        <RxCopy />
                                        <FaFacebook />
                                        <FaTwitter />
                                        <FaPinterestP />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </div>
        </section>
    )
}
export default ProductInformation;