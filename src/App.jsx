
import reactLogo from './assets/react.svg'
import About from './components/About'
import Caroulsel from './components/Caroulsel'
import Footer from './components/Footer'
import Header from './components/Header'
import OurRooms from './components/OurRooms'
import { Route, Routes } from 'react-router-dom'
import OurServices from './components/OurServices'
import Testimonials from './components/Testimonials'
import viteLogo from '/vite.svg'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import Roomspage from './pages/Roomspage'
import ContactPage from './pages/ContactPage'
import BookingPage from './pages/BookingPage'
// import './App.css'

function App() {


  return (
    <div className="container-xxl bg-white p-0">
      
        <Routes>
         <Route index element={<HomePage/>}/>
         <Route path='about' element={<AboutPage/>} />
         <Route path='services' element={<ServicesPage/>} />
         <Route path='rooms' element={<Roomspage/>} />
         <Route path='contact' element={<ContactPage/>} />
         <Route path='booking' element={<BookingPage/>} />
        </Routes>
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  )
}

export default App
