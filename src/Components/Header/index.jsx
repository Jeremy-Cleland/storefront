import {
  AppBar,
  styled,
  Typography,
  Button,
  Toolbar,
  Paper,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((state) => state);

  const StyledToolbar = styled(Toolbar)(() => ({
    alignItems: "flex-start",
    margin: "0",
    padding: "0",
    backgroundColor: "#141517",
    "@media all": {
      minHeight: 128,
    },
  }));
  return (
    <Grid container p={0}>
      <AppBar position="static">
        <Paper elevation={12}>
          <StyledToolbar>
            <Grid item xs>
              <Button component={Link} to="/">
                <Typography
                  variant="h1"
                  component="h1"
                  noWrap
                  sx={{ flexGrow: 1, alignSelf: "flex-end", pb: "2vh" }}
                >
                  Store Front
                </Typography>
              </Button>
            </Grid>
            <Grid item xs style={{ textAlign: "right", alignSelf: "center" }}>
              <Button component={Link} to="/cart">
                CART ({cart.length})
              </Button>
            </Grid>
          </StyledToolbar>
        </Paper>
      </AppBar>
    </Grid>
  );
};

export default Header;
