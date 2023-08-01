import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import MyProjects from "./components/MyProjects/MyProjects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="app" className="app">
      <Header />
      <Body />
      <Skills />
      <About />
      <hr></hr>
      <MyProjects />
      <Footer />
    </div>
  );
}

export default App;
