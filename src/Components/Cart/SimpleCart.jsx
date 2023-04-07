import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Store/actions.js";
import { When } from "react-if";
import { Box, Paper, Button } from "@mui/material";

const Cart = () => {
  // const classes = useStyles()
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  return (
    <>
      <When condition={cart.length > 0}>
        <Box
          sx={{
            width: 300,
            maxHeight: 300,
          }}
        >
          <Paper elevation={12}></Paper>
          <ul>
            {cart.map((product, index) => (
              <li key={`cart-${index}`}>
                <Button
                  aria-hidden
                  onClick={() => dispatch(removeItem(product))}
                >
                  {product.name}
                  {""} X
                </Button>
              </li>
            ))}
          </ul>
        </Box>
      </When>
    </>
  );
};

export default Cart;
