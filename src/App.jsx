import "./App.css";
import { ThemeProvider, createTheme, Container } from "@mui/material";
import Navbar from "./Component/Navbar";
import MainFrame from "./Component/ProductPage/MainFrame";
// import Navbar from "./Component/Navbar";
// import ProdPage from "./Component/ProductPage/ProdPage";
import LandingPage from "./container/landingPage/LandingPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#ffff00",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
      {/* <Navbar/> */}
      <MainFrame/>

    </ThemeProvider>
  );
}

export default App;
