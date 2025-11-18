import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import PageHeader from '../components/PageHeader'
import BookComponent from '../components/BookComponent'


const BookingPage = () => {
  return (
    <>
        <Header/>
        <BookComponent/>
        <br/><br/><br/>
        <Footer/>
    </>
  )
}

export default BookingPage