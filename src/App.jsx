import HomePage from "./pages/Home-Page";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/Cart-Page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App;
