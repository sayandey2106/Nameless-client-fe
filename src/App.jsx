import "./App.css";
import { ThemeProvider, createTheme, Container } from "@mui/material";
import Navbar from "./component/navbar/Navbar";
import ProdPage from "./component/productPage/ProdPage";
import LandingPage from "./component/landingPage/LandingPage";

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
      <Navbar />
      <ProdPage />

    </ThemeProvider>
  );
}

export default App;
