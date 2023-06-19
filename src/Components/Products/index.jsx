import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { addItem, updateInventory, getProducts } from "../../Store/actions.js";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import {
  Box,
  Button,
  Card,
  Grid,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
} from "@mui/material";

const Products = () => {
  const dispatch = useDispatch();
  const { products, category } = useSelector((state) => state);
  const { activeCategory } = category;

  const productList = products.filter(
    (product) => product.category === activeCategory
  );

  const dispatchHandler = useCallback(
    (product) => {
      dispatch(addItem(product));
      dispatch(updateInventory(product));
    },
    [dispatch]
  );

  useEffect(() => {
    if (activeCategory) {
      dispatch(getProducts());
    }
  }, [activeCategory, dispatch]);

  return (
    <Grid
      container
      spacing={10}
      sx={{ maxWidth: "100vw", padding: 2 }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {activeCategory &&
        productList.map((product, index) => (
          <Grid key={`product-${index}`} item xs="auto">
            <Box sx={{ padding: 2 }}>
              <Card
                data-testid={`product-${index}`}
                sx={{ maxWidth: 450, margin: 0 }}
                variant="outlined"
              >
                <CardContent>
                  <Typography variant="h5">{product.name}</Typography>
                  <Typography variant="body1">{product.description}</Typography>
                  <CardMedia
                    sx={{ height: 400, width: 400 }}
                    component="img"
                    image={`https://source.unsplash.com/random?${product.name}`}
                    title={product.name}
                  />
                </CardContent>

                <IconButton
                  onClick={() => dispatchHandler(product)}
                  size="small"
                  color="primary"
                  sx={{ backgroundColor: "#141517" }}
                >
                  <AddShoppingCartIcon fontSize="small" />
                </IconButton>
                <Button
                  size="small"
                  component={Link}
                  to={`/productDetails/${product._id}`}
                >
                  Product Details
                </Button>
              </Card>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

export default Products;
