import HomePage from "./pages/Home-Page";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/Cart-Page";
import ProductPage from "./pages/Product-Page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="Product/:id" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App;
