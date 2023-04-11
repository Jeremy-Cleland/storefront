import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ShoppingCart from "./Components/ShoppingCart";
import Storefront from "./Components/Storefront";
import ProductDetails from "./Components/ProductDetails";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Storefront />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// <Route exact path="/" component={Storefront} />
// <Route exact path="/cart" component={Cart} />
// <Route path="/product/:id" component={Product} />
