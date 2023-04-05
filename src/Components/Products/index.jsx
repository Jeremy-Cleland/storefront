import { connect, useDispatch } from "react-redux";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addToCart } from "../../Store/cart";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Paper,
  Grid,
  Divider,
} from "@mui/material";

const Products = (props) => {
  const { products, activeCategory } = props;
  const dispatch = useDispatch();

  return (
    <Grid
      container
      spacing={12}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      {activeCategory &&
        products.map((product) => (
          <Grid key={product.sku} item xs="auto">
            <Paper elevation={12}>
              <Card sx={{ maxWidth: 450, margin: 0, padding: 0 }}>
                <CardMedia
                  sx={{
                    width: 450,
                    maxHeight: 350,
                    objectFit: "scale-down",
                    margin: "auto",
                  }}
                  component="img"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" color="#f6f6f6">
                    {product.name}
                  </Typography>

                  <Divider textAlign="right">
                    Price: ${product.salePrice}
                  </Divider>

                  <Typography variant="h5">{product.category}</Typography>
                  <Typography variant="body1" color="#f6f6f6">
                    {product.description}
                  </Typography>
                  <CardActions>
                    <Button
                      onClick={() => dispatch(addToCart(product))}
                      variant="contained"
                      size="small"
                      color="primary"
                      sx={{ margin: "5px", backgroundColor: "#141517" }}
                    >
                      <AddShoppingCartIcon
                        fontSize="small"
                        aria-label="Add to Cart"
                        sx={{ margin: "5px" }}
                      />
                      Add to Cart
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    activeCategory: state.activeCategory,
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Products);
