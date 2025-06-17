import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
     <Navbar />
     <Header />
     <About />
     <Projects />
     {/* <Articles /> */}
     <Contact />
     <Footer />
    </>
  )
}

export default App
