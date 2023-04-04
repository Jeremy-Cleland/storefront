import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Categories from "./Components/Categories";
import Products from "./Components/Products";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default App;