import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Component/Page/Home'
import About from './Component/Page/About'
import FAQ from './Component/Page/Faqs'
import Blogs from './Component/Page/Blogs'
import Contact from './Component/Page/Contact'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/faqs' element={<FAQ />} />
          <Route path='/blog/*' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
