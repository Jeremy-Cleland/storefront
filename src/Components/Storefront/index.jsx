import Categories from "../Categories";
import Products from "../Products";
import SimpleCart from "../Cart/SimpleCart.jsx";

const Storefront = () => {
  return (
    <>
      <Categories />
      <Products />
      <SimpleCart />
    </>
  );
};

export default Storefront;
