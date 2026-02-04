import { FaPlus, FaMinus, FaCheck } from "react-icons/fa6";
import deleteIcon from "../../assets/trash.svg";
import productImgTest from "../../assets/Image-product1.png";
import IconShopSummary from "../../assets/Icon-shop-summary.svg";
function CartProducts() {
    return (
        <section className="cart-products">
            <div className="container">
                <div className="all-products-cart">
                    <div className="col-number-items">
                        <h2>Number of Items</h2>
                        <span className="number-items">3</span>
                    </div>
                    <div className="all-products">
                        <div className="col-product">
                            <div className="image-title-product">
                                <div className="image-product">
                                    <img src={productImgTest} alt="img-product" />
                                </div>
                                <h2>2 Pieces Mango set- Regular fit</h2>
                            </div>
                            <span className="price-product">₹25.99</span>
                            <div className="col-quantity">
                                <FaMinus />
                                <span className="number-quantity">1</span>
                                <FaPlus />
                            </div>
                            <span className="total-price-product">₹25.99</span>
                            <div className="delete-product">
                                <img src={deleteIcon} alt="delete-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="content-information-order">
                        <div className="col-price">
                            <p>Price</p>
                            <span>₹99.23</span>
                        </div>
                        <div className="col-shipping">
                            <p>Shipping</p>
                            <span>₹0</span>
                        </div>
                        <div className="col-tax">
                            <p>Tax</p>
                            <span>₹0</span>
                        </div>
                        <div className="col-discount-price">
                            <p>Discount price</p>
                            <span>₹47.10</span>
                        </div>
                        <div className="col-gift-box">
                            <div>
                                <span className="col-checkbox">
                                    <FaCheck />
                                </span>
                                <p>Pack in a Gift Box</p>
                            </div>
                            <span>₹10.90</span>
                        </div>
                        <div className="col-total-price">
                            <p>Total Price</p>
                            <span>₹110.13</span>
                        </div>
                    </div>
                    <button className="shop-now">
                        <img src={IconShopSummary} alt="icon-shop" />
                        <span>Shop now</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default CartProducts; 