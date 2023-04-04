import { AppBar, Box, styled, Typography, Toolbar, Paper } from "@mui/material";

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
      <AppBar position="static">
        <Paper elevation={12}>
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
        </Paper>
      </AppBar>
    </Box>
  );
};

export default Header;
