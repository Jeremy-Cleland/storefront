import { Container, Box, Typography, CssBaseline } from "@mui/material";

const Footer = () => {
  return (
    <>
      <CssBaseline />
      <Box
        component="Footer"
        sx={{
          px: 2,
          py: 1,
          position: "fixed",
          bottom: 0,
          width: "100%",
          mt: "auto",
        }}
      >
        <Container disableGutters={true}>
          <Typography align="center" variant="h6" sz={{ fontFamily: "Cavaet" }}>
            © 2023 Jeremy Cleland
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
