import { connect } from "react-redux";
import SimpleCart from "../SimpleCart";
import { styled } from "@mui/material/styles";
import { Box, Chip, Container, Breadcrumbs, Typography } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import StorefrontIcon from "@mui/icons-material/Storefront";

const CategoryBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    backgroundColor: "#141517",
    color: "#f6f6f6",
    "&:hover, &:focus": {
      backgroundColor: "#303030",
      color: "#f6f6f6",
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: "#141517",
    },
  };
});

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    products: state.products,
    activeCategory: state.activeCategory,
    cart: state.cart,
  };
};

const Categories = (props) => {
  return (
    <Box
      component="nav"
      sx={{
        py: 4,
        width: "100vw",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography
          variant="h5"
          component="h5"
          sx={{ mb: 2, color: "#f6f6f6" }}
        >
          Browse our Categories
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <CategoryBreadcrumb
            component="a"
            href="#"
            label="All"
            name="all"
            icon={<StorefrontIcon fontSize="small" sx={{ color: "#f6f6f6" }} />}
            onClick={() => {
              props.dispatch({ type: "RESET" });
            }}
          />
          <CategoryBreadcrumb
            component="a"
            href="#"
            label="Desktops"
            name="Desktops"
            icon={<DesktopMacIcon fontSize="small" sx={{ color: "#f6f6f6" }} />}
            onClick={() => {
              props.dispatch({
                type: "ACTIVE CATEGORY",
                payload: "Desktops",
              });
            }}
          />
          <CategoryBreadcrumb
            component="a"
            href="#"
            label="MacBooks"
            name="MacBooks"
            icon={<LaptopMacIcon fontSize="small" sx={{ color: "#f6f6f6" }} />}
            onClick={() => {
              props.dispatch({
                type: "ACTIVE CATEGORY",
                payload: "MacBooks",
              });
            }}
          />
          <CategoryBreadcrumb
            component="a"
            href="#"
            label="Tablets"
            name="Tablets"
            icon={<TabletMacIcon fontSize="small" sx={{ color: "#f6f6f6" }} />}
            onClick={() => {
              props.dispatch({ type: "ACTIVE CATEGORY", payload: "Tablets" });
            }}
          />
          <CategoryBreadcrumb
            component="a"
            href="#"
            label="Headphones"
            name="Headphones"
            icon={<HeadphonesIcon fontSize="small" sx={{ color: "#f6f6f6" }} />}
            onClick={() => {
              props.dispatch({
                type: "ACTIVE CATEGORY",
                payload: "Headphones",
              });
            }}
          />
        </Breadcrumbs>
      </Container>
      <SimpleCart />
    </Box>
  );
};

export default connect(mapStateToProps)(Categories);
