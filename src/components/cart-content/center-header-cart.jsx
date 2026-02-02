import iconLogo from "../../assets/icon-logo-cart.svg";
import { FaSearch } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
function CenterHeaderCart() {
    return (
        <section className="w-full h-full center-header-cart">
            <div className="container min-w-[100%] h-full flex justify-between items-center">
                <div className="flex items-center gap-5 col-logo">
                    <img src={iconLogo} alt="icon-logo-cart" className="cursor-pointer" />
                    <h1 className="text-[32px] font-bold text-linearColor">United Deals</h1>
                </div>
                <form action="" className="flex items-center w-[35%] h-12 bg-bgColor rounded-lg pl-3 pr-3">
                    <button type="submit">
                        <FaSearch />
                    </button>
                    <input type="text" placeholder="Search essentials, groceries and more..." />
                    <AiOutlineBars />
                </form>
                <div className="sign-in-cart-content">
                    <div className="col-user">
                        <FiUser />
                        <p>Sign Up/Sign In</p>
                    </div>
                    <div className="col-cart">
                        <FiShoppingCart />
                        <p>Cart</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CenterHeaderCart;