import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  ThemeProvider,
  createTheme,
  CssBaseline
} from "@mui/material";

import {
  useMemo,
  useState,
  useEffect
} from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const theme = useMemo(() =>
    createTheme({

      palette: {
        mode,

        primary: {
          main: "#b08d57"
        },

        background: {
          default:
            mode === "dark"
              ? "#121212"
              : "#ffffff",

          paper:
            mode === "dark"
              ? "#1e1e1e"
              : "#ffffff"
        }
      },

      typography: {
        fontFamily: "Poppins, sans-serif"
      }

    }),
    [mode]
  );

  return (

    <ThemeProvider theme={theme}>

      <CssBaseline />

      <HashRouter>

        <Navbar
          mode={mode}
          setMode={setMode}
        />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

        <Footer mode={mode} />

      </HashRouter>

    </ThemeProvider>
  );
}

export default App;