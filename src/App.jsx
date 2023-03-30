import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import "./index.css"



function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
