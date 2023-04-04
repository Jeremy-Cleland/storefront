import {
  AppBar,
  Box,
  styled,
  Typography,
  Toolbar,
  Paper,
  Grid,
} from "@mui/material";

const Header = () => {
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
    <Box sx={{ flexGrow: 1, m: 0, p: 0, boxShadow: 1 }}>
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
              </StyledToolbar>
              {/* <Typography sx={{ mt: 10 }} variant="h6" component="div">
                Cart: ({cart.length})
              </Typography> */}
              s
            </Box>
          </Paper>
        </AppBar>
      </Grid>
    </Box>
  );
};

export default Header;
