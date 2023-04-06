import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Store/actions";
import { Button, Container } from "@mui/material";

// const StyledList = styled(List)(() => ({
//   width: 100,
//   display: "flex",
//   alignItems: "center",
// }));

const SimpleCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  return (
    <Container sx={{ height: 200, width: "100vw", overflow: "scroll" }}>
      <h5>Cart ({cart.length}) </h5>
      {cart.map((product, index) => (
        <p key={`cart-${index}`}>
          {product.name}
          <Button
            variant="text"
            onClick={() => dispatch(removeFromCart(product))}
          >
            X
          </Button>
        </p>
      ))}
    </Container>
  );
};

export default SimpleCart;
