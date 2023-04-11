import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Store/actions";
import { Typography, Button } from "@mui/material";

const ShoppingCart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Typography sx={{ alignContent: "center", textAlign: "center" }}>
      <h1>Shopping Cart</h1>
      <h3>items:</h3>
      {cart.length > 0 ? (
        cart.map((item, idx) => (
          <Typography key={`shoppingCart-${idx}`}>
            {item.name} ${item.price} {"--------"}
            <Button
              onClick={() => dispatch(removeItem(item))}
              className="remove"
            >
              X
            </Button>
          </Typography>
        ))
      ) : (
        <h3>Your Cart is Empty</h3>
      )}
    </Typography>
  );
};

export default ShoppingCart;
