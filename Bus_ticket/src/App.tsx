import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Page/Home'
import About from './Page/About'
import FAQ from './Page/Faqs'
import Blogs from './Page/Blog/Blogs'
import Contact from './Page/Contact'
import Buyticket from './Page/Buytickets/Buyticket'
import Page404 from  './Page/page404'
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
          <Route path='/buytickets' element={<Buyticket />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
