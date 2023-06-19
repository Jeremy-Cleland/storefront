import {
  AppBar,
  styled,
  Typography,
  IconButton,
  Toolbar,
  Paper,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const { cart } = useSelector((state) => state);

  const StyledToolbar = styled(Toolbar)(() => ({
    alignItems: "flex-start",
    margin: "0",
    padding: "0",
    backgroundColor: "#141517",
    "@media all": {
      maxHeight: "90px",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Paper elevation={12}>
          <StyledToolbar>
            <Box sx={{ flexGrow: 1 }}>
              <IconButton component={Link} to="/" color="inherit">
                <Typography
                  variant="h1"
                  component="h1"
                  noWrap
                  sx={{ alignSelf: "flex-end", marginLeft: "10px" }}
                >
                  Store Front
                </Typography>
              </IconButton>
            </Box>
            <IconButton component={Link} to="/cart" color="inherit">
              <ShoppingCartIcon />
              <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
                ({cart.length})
              </Typography>
            </IconButton>
          </StyledToolbar>
        </Paper>
      </AppBar>
    </Box>
  );
};

export default Header;
