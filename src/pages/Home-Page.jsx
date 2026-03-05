import Header from "../components/header/Header";
import BannerSlider from "../components/New-Home-Component/banners-slider";
import Banner from "../components/banners.jsx/banner";
import Freedelivery from "../components/freedelivery/freedelivery";
import FeaturedProducts from "../components/featured-products/featured-products";
//import ShopWithCategories from "../components/shop-Categories/shop-categories";
import BestProducts from "../components/best-products/best-products";
import MacbookProBanner from "../components/macbook-pro/macbook-pro-banner";
import NewAppleBanner from "../components/new-apple-banners/new-apple-banner";
import FlashProducts from "../components/flash-Products/flash-products";
import LatestNews from "../components/latest-news/latest-news";
import Footer from "../components/footer/footer";
import TodaysDealsProducts from "../components/New-Home-Component/todays-deals-products";
import TopCategories from "../components/New-Home-Component/top-categories";
import ElectronicsBrands from "../components/New-Home-Component/electronics-brands";
function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            <Freedelivery />
            <TodaysDealsProducts />
            <TopCategories />
            <ElectronicsBrands />
            <FeaturedProducts />
            <NewAppleBanner />
            <BestProducts />
            <MacbookProBanner />
            <FlashProducts />
            <LatestNews />
            <Footer />
        </>
    )
}
export default HomePage;