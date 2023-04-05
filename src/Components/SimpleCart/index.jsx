import { useDispatch, connect } from "react-redux";
import { removeFromCart } from "../../Store/cart";
import { IconButton, styled, Typography, List, ListItem } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const StyledList = styled(List)(() => ({
  width: 100,
  display: "flex",
  alignItems: "center",
}));

const SimpleCart = (props) => {
  const { cart } = props;

  const dispatch = useDispatch();

  return (
    <StyledList>
      <Typography sx={{ mt: 10 }} variant="h6">
        Cart: ({cart.length})
      </Typography>
      {cart.map((product) => (
        <ListItem key={product.sku}>
          {product.name}
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => dispatch(removeFromCart(product))}
          >
            Remove from Cart
            <RemoveShoppingCartIcon />
          </IconButton>
        </ListItem>
      ))}
    </StyledList>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    products: state.products,
    activeCategory: state.activeCategory,
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(SimpleCart);
