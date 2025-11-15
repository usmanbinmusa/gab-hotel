import { Link } from "react-router-dom"

function Footer() {
  return (

    //Footer Start 
    <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
      <div className="container pb-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <div className="bg-primary rounded p-4">
              <a href="index.html"><h1 className="text-white text-uppercase mb-3">Gab Hotel</h1></a>
              <p className="text-white mb-0">
                Discover a perfect blend of luxury, comfort,
                and exceptional hospitality, located in the
                heart of Kano State, Nigeria. Whether you’re
                visiting for business, vacation, or a weekend
                getaway, our hotel offers world-class facilities
                designed to make your stay unforgettable.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>No.42 Ibrahim Taiwo Road, Kano - State.</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+2349012968899 [Management]</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+2348166778970 [Enquiry]</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+2349075467138 [Bookings]</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>crisscrosskano@yahoo.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="row gy-5 g-4">
              <div className="col-md-6">
                <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>

                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="btn btn-link">About</Link>
                <Link to="/services" className="btn btn-link">Services</Link>
                <Link to="/rooms" className="btn btn-link">Rooms</Link>
                <Link to="/contact" className="btn btn-link">Contact</Link>
              </div>
              <div className="col-md-6">
                <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                <Link to='/services' className="btn btn-link" >Rooms & Apartments</Link>
                <Link to='/services' className="btn btn-link" >Food & Restaurant</Link>
                <Link to='/services' className="btn btn-link" >GYM & Fitness</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#"></a>

              {/* This template is free as long as you keep the footer author’s credit link/attribution
                 link/backlink. If you'd like to use the template without the footer author’s credit
                  link/attribution link/backlink, you can purchase the Credit Removal License from
                   "https://htmlcodex.com/credit-removal". Thank you for your support. */}
              Designed By <a className="border-bottom" href="">Pinnacle Online Limited.</a>
              <br />Contact: <a className="border-bottom" href="" target="_blank">+2348131532018</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
             
            </div>
          </div>
        </div>
      </div>
    </div>
    //Footer End 


  )
}

export default Footer