import "./App.css";
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {
  return (
    <div id ="app"className="app">
      <Header/>
      <Body/>
      <Skills/>
      <About/>
      
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
