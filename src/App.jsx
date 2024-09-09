import DynamicProduct from "./components/DynamicProduct";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<DynamicProduct />} />
      </Routes>
    </>
  );
}
