import React, { Suspense, lazy } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import ErrorBoundary from "./components/ErrorBoundary";

const About = lazy(() => import("./components/About/About"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const ParallaxComponent = lazy(() => import("./components/Parallax/Parallax"));
const Technologies = lazy(() => import("./components/Technologies/Technologies"));
const Playground = lazy(() => import("./components/Playground/Playground"));
const Experience = lazy(() => import("./components/Experience/Experience"));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Navbar />
          <Home />
          <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
            <About />
            <Experience />
            <Projects />
            <ParallaxComponent />
            <Technologies />
            <Playground />
            <Footer />
          </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

// function App() {
//   return (
//     <Modal />
//   );
// }

// export default App;
