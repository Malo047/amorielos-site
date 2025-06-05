import './App.css'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Fashion } from './components/fashion/Fashion'
import { Header } from "./components/header/Header"
import { Intro } from './components/intro/Intro'

function App() {
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <Fashion></Fashion>
      <About></About>
      <Contact></Contact>
    </>
  )
}

export default App
