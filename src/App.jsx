import './App.css'
import { About } from './components/about/About'
import { Fashion } from './components/fashion/Fashion'
import { Intro } from './components/intro/Intro'
import{ Contact } from "./components/contact/Contact"
import MobileMenu from './components/header/mobile-menu/MobileMenu'

function App() {
  return (
    <>
      <MobileMenu/>
      <Intro></Intro>
      <Fashion></Fashion>
      <About></About>
      <Contact></Contact>
    </>
  )
}

export default App
