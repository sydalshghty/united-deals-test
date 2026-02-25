import TopHeaderCart from "../components/cart-content/top-header-cart";
import CenterHeaderCart from "../components/cart-content/center-header-cart";
import CategoriesProducts from "../components/Product-Page-Content/categories-Products";
import NavLinksProduct from "../components/Product-Page-Content/nav-links-product";
import ProductInformation from "../components/Product-Page-Content/product-information";
import Footer from "../components/footer/footer";
function ProductPage() {
    return (
        <>
            <TopHeaderCart />
            <CenterHeaderCart />
            <CategoriesProducts />
            <NavLinksProduct />
            <ProductInformation />
            <Footer />
        </>
    )
}
export default ProductPage;