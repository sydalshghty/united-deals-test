import TopHeaderCart from "../components/cart-content/top-header-cart";
import CenterHeaderCart from "../components/cart-content/center-header-cart";
import BottomHeaderCart from "../components/cart-content/bottom-header-cart";
import BackandHeadingCart from "../components/cart-content/back-heading-cart";
import CartProducts from "../components/cart-content/cart-products";
function CartPage() {
    return (
        <>
            <TopHeaderCart />
            <CenterHeaderCart />
            <BottomHeaderCart />
            <BackandHeadingCart />
            <CartProducts />
        </>
    )
}
export default CartPage;