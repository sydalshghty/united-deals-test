import TopHeaderCart from "../components/cart-content/top-header-cart";
import CenterHeaderCart from "../components/cart-content/center-header-cart";
import BottomHeaderCart from "../components/cart-content/bottom-header-cart";
import BackandHeadingCart from "../components/cart-content/back-heading-cart";
import CartProducts from "../components/cart-content/cart-products";
import ProductsSlider from "../components/cart-content/products-slider";
import Footer from "../components/footer/footer";
function CartPage() {
    return (
        <>
            <TopHeaderCart />
            <CenterHeaderCart />
            <BottomHeaderCart />
            <BackandHeadingCart />
            <CartProducts />
            <ProductsSlider />
            <Footer />
        </>
    )
}
export default CartPage;