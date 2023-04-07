import { useDispatch, useSelector } from "react-redux";
import { getCategories, selectCategory } from "../../Store/actions.js";
import { ButtonGroup, Chip, Typography, styled } from "@mui/material";
import { useEffect } from "react";
import SimpleCart from "../Cart/SimpleCart.jsx";
import { Box, Container } from "@mui/system";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const CategoryBreadcrumb = styled(Chip)(() => {
    return {
      backgroundColor: "#141517",
      color: "#f6f6f6",
      "&:hover, &:focus": {
        backgroundColor: "#303030",
        color: "#f6f6f6",
      },
      "&:active": {
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 8px, rgba(0, 0, 0, 0.24) 0px 3px 4px",
        backgroundColor: "#141517",
      },
    };
  });
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
        <ButtonGroup variant="text" aria-label="text button group">
          {categories.map((category, index) => (
            <CategoryBreadcrumb
              data-testid={`category-${index}`}
              key={`category-${index}`}
              component="a"
              href="#"
              label={category.name}
              name={category.name}
              onClick={() => dispatch(selectCategory(category.name))}
            >
              {category.name}
            </CategoryBreadcrumb>
          ))}
        </ButtonGroup>
      </Container>
      <SimpleCart />
    </Box>
  );
};

export default Categories;
