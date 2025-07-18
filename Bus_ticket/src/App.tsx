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
import Bookinghistoey from './features/user/Page/Bookinghistory'
import Ticketcreatenew from './features/user/Page/Support/Ticketcreatenew'
import SupportTicket from './features/user/Page/Support/Support_Ticket'
import ProfileSetting from './features/user/Page/ProfileSetting'
import Changepassword from './features/user/Page/Changepassword'

// admin
import ProtectedRouteAmin from './services/ProtectedRouteAmin'
import SigninAdmin from './features/admin/Page/Signin'
import LayoutAdmin from './features/admin/LayoutAdmin'
import Dashboardadmin from './features/admin/Page/Administer/Dashboard'
import Statistics from './features/admin/Page/Administer/Statistics'
import TicketManagement from './features/admin/Page/TicketManagement'
import BookedTickets from './features/admin/Page/Booked/BookedTickets'
import Rejected from './features/admin/Page/Booked/Rejected'
import Pending from './features/admin/Page/Booked/Pending'
import Confirmed from './features/admin/Page/Booked/Confirmed'

// import ScrollToShow from './services/ScrollToShow'
import './App.css'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './features/user/Dashboard'

// import Callapi from './Page/CallAPI'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Icon from './icons/Icon'

function AppRoutes() {
  const location = useLocation()
  const hideHeaderFooter = ['/signin', '/signup', '/user/profile', '/admin']
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
          path='/user/profile/profile-setting'
          element={
            <ProtectedRoute>
              <ProfileSetting />
            </ProtectedRoute>
          }
        />

        <Route
          path='user/booked-ticket/history'
          element={
            <ProtectedRoute>
              <Bookinghistoey />
            </ProtectedRoute>
          }
        />
        <Route
          path='/user/ticket/createnew'
          element={
            <ProtectedRoute>
              <Ticketcreatenew />
            </ProtectedRoute>
          }
        />
        <Route
          path='/user/support-ticket'
          element={
            <ProtectedRoute>
              <SupportTicket />
            </ProtectedRoute>
          }
        />
        <Route
          path='/user/change-password'
          element={
            <ProtectedRoute>
              <Changepassword />
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
      {/* <ScrollToShow/> */}
    </>
  )
}

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<SigninAdmin />} />

        <Route
          path='/admin/*'
          element={
            <ProtectedRouteAmin>
              <LayoutAdmin />
            </ProtectedRouteAmin>
          }
        >
          <Route path='dashboard' element={<Dashboardadmin />} />
          <Route path='statistics' element={<Statistics />} />
          <Route path='manage-tickets' element={<TicketManagement />} />
          <Route path='booked-tickets' element={<BookedTickets />} />
          <Route path='booked-tickets/rejected' element={<Rejected />} />
          <Route path='booked-tickets/pending' element={<Pending />} />
          <Route path='booked-tickets/confirmed' element={<Confirmed />} />
        </Route>
      </Routes>
    </>
  )
}
function App() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  return <>{isAdmin ? <AdminRoutes /> : <AppRoutes />}</>
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
