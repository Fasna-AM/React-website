import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Company from './pages/Company'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Contact from './pages/Contact'


function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
