import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Page/Home'
import About from './Page/About'
import FAQ from './Page/Faqs'
import Blogs from './Page/Blog/Blogs'
import Contact from './Page/Contact'
import Buyticket from './Page/Buytickets/Buytickets'
import Ticket from './Page/Buytickets/Buyticket'
import Page404 from './Page/page404'
import ScrollToTop from './services/ScrollToTop'
import LoadingPage from './Page/Loding'
import Signin from './Component/auth/Signin'
import Signup from './Component/auth/Signup'
import PrivacyPolicy from './Page/viserbus/policy/PrivacyPolicy'
import TermsOfService from './Page/viserbus/policy/TermsOfService'
import TicketPolicy from './Page/viserbus/policy/TicketPolicy'
import RefundPolicy from './Page/viserbus/policy/RefundPolicy'
import ProtectedRoute from './services/ProtectedRoute'

import ProfileSetting from './features/user/Page/ProfileSetting'
import './App.css'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './features/user/Dashboard'
// import Callapi from './Page/CallAPI'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function AppRoutes() {
  const location = useLocation()
  const hideHeaderFooter = ['/signin', '/signup', '/user/profile']
  // loading mỗi khi chuyển trang
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)  
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) // Thay đổi thời gian nếu cần

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      {loading && (
        <div className='loading-page overflow-hidden'>
          <LoadingPage />
        </div>
      )}
      {!hideHeaderFooter.includes(location.pathname) && <Header />}
      <ScrollToTop />
      <Routes></Routes>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/faqs' element={<FAQ />} />
        <Route path='/blog/*' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/buytickets' element={<Buyticket />} />
        <Route path='/buytickets/:id/:name' element={<Ticket />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />

        <Route
          path='/user/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/user/buytickets'
          element={
            <ProtectedRoute>
              <Buyticket />
            </ProtectedRoute>
          }
        />
        <Route
          path='/user/profile/profile-setting'
          element={
            <ProtectedRoute>
              <ProfileSetting />
            </ProtectedRoute>
          }
        />
        <Route path='viserbus/policy/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='viserbus/policy/terms-of-service' element={<TermsOfService />} />
        <Route path='viserbus/policy/ticket-policy' element={<TicketPolicy />} />
        <Route path='viserbus/policy/refund-policy' element={<RefundPolicy />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      {!hideHeaderFooter.includes(location.pathname) && <Footer />}
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
