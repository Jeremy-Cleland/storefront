import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, CardMedia, Typography } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state);
  const selectedProduct = products.find((product) => product._id === id);
  return (
    <Box sx={{ padding: 2, textAlign: "center" }}>
      <Typography variant="h2" component="h1" sx={{ padding: "10px" }}>
        {selectedProduct.name}
      </Typography>
      <CardMedia
        sx={{ height: 600, width: 600, margin: "auto" }}
        component="img"
        image={`https://source.unsplash.com/random?${selectedProduct.name}`}
        title={selectedProduct.name}
      />
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {selectedProduct.description}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Price: ${selectedProduct.price}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Inventory: {selectedProduct.inventory}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
