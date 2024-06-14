import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact us/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Projects></Projects>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
