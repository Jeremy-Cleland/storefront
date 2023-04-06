import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Store/actions";
import { Button, Container } from "@mui/material";
import { When } from "react-if";

// const StyledList = styled(List)(() => ({
//   width: 100,
//   display: "flex",
//   alignItems: "center",
// }));

const SimpleCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  return (
    <When condition={cart.length > 0}>
      <Container sx={{ height: 200, width: "100vw", overflow: "scroll" }}>
        <h5>Cart ({cart.length}) </h5>
        <ul>
          {cart.map((product, index) => (
            <li key={`cart-${index}`}>
              {product.name}
              <span aria-hidden onClick={() => dispatch(removeItem(product))}>
                X
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </When>
  );
};

export default SimpleCart;
