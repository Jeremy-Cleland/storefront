import { connect } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Box,
  // Container,
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

  // <Paper elevation={12} variant="outlined" square />;

  return (
    <Box component="section" sx={{}}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Products
      </Typography>
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

                    <Typography variant="body1" color="red">
                      <Divider textAlign="right">
                        Price: ${product.salePrice}
                      </Divider>
                    </Typography>
                    <Typography variant="h5" color="red">
                      {product.category}
                    </Typography>
                    <Typography variant="body1" color="#f6f6f6">
                      {product.description}
                    </Typography>
                    <CardActions>
                      <Button>
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
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    activeCategory: state.activeCategory,
  };
};

export default connect(mapStateToProps)(Products);
