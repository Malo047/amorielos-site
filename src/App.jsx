import './App.css'
import { About } from './components/about/About'
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
    </>
  )
}

export default App
