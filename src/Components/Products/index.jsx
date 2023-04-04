import { connect } from "react-redux";

import {
  Box,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const Products = (props) => {
  const { products, activeCategory } = props;

  return (
    <Box
      component="section"
      sx={{
        py: 1,
        px: 2,
        width: "100vw",
        pb: 15,
      }}
    >
      <Container>
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          Products
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {activeCategory &&
            products.map((product) => (
              <Card key={product.sku} sx={{ maxWidth: 400, margin: "2rem" }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image={product.image}
                    alt={product.name}
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="#f6f6f6">
                    {product.regularprice}
                  </Typography>
                  <Typography variant="body1" color="red">
                    {product.category}
                  </Typography>
                  <Typography variant="body1" color="#f6f6f6">
                    {product.description}
                  </Typography>
                  <Typography variant="body1" color="#f6f6f6">
                    {product.inStock}
                  </Typography>
                  <CardActions>
                    <Button size="small">Add to Card</Button>
                  </CardActions>
                </CardContent>
              </Card>
            ))}
        </Box>
      </Container>
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
