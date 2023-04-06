import {
  AppBar,
  Box,
  styled,
  Typography,
  Toolbar,
  Paper,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";

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
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <AppBar position="static">
        <Paper elevation={12}>
          <Box>
            <StyledToolbar>
              <Typography
                variant="h1"
                component="h1"
                noWrap
                sx={{ flexGrow: 1, alignSelf: "flex-end", pb: "2vh" }}
              >
                Store Front
              </Typography>
              <Typography sx={{ mt: 10 }} variant="h6" component="div">
                Cart: ({cart.length})
              </Typography>
            </StyledToolbar>
          </Box>
        </Paper>
      </AppBar>
    </Grid>
  );
};

export default Header;
