import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import ParallaxComponent from "./components/Parallax/Parallax";
import Technologies from "./components/Technologies/Technologies";
import Playground from "./components/Playground/Playground";
import Experience from "./components/Experience/Experience";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Projects />
          <ParallaxComponent />
          <Technologies />
          <Playground />
          <Footer />
      </ThemeProvider>
  );
}

export default App;
