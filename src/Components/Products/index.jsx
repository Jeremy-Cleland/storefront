import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addItem, updateInventory, getProducts } from "../../Store/actions.js";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import {
  Button,
  Card,
  Grid,
  CardContent,
  Typography,
  CardMedia,
  Paper,
} from "@mui/material";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  const { activeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productList = products.filter(
    (product) => product.category === activeCategory
  );

  const dispatchHandler = (product) => {
    dispatch(addItem(product));
    dispatch(updateInventory(product));
  };

  return (
    <Grid
      container
      spacing={12}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      {activeCategory &&
        productList.map((product, index) => (
          <Grid key={`product-${index}`} item xs="auto">
            <Paper elevation={12}>
              <Card
                data-testid={`product-${index}`}
                sx={{ maxWidth: 450, height: 300, margin: 0, padding: 0 }}
                variant="outlined"
              >
                <CardContent>
                  <Typography variant="h5">{product.name}</Typography>
                  <Typography variant="body1">{product.description}</Typography>
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
                </CardContent>
                <Button
                  onClick={() => dispatchHandler(product)}
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
              </Card>
            </Paper>
          </Grid>
        ))}
    </Grid>
  );
};

export default Products;
