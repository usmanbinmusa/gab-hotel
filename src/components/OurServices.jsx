function OurServices(){
  return (
    <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <a className="service-item rounded" href="">
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i className="fa fa-hotel fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 className="mb-3">Rooms & Appartment</h5>
                <p className="text-body mb-0">Spacious and elegant, perfect for guests who desire extra comfort.</p>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <a className="service-item rounded" href="">
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i className="fa fa-utensils fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 className="mb-3">Food & Restaurant</h5>
                <p className="text-body mb-0">Our in-house restaurant offers a wide selection of freshly prepared meals 
                                              to delight your senses. Enjoy buffet breakfast, dishes, and chef-special
                                               menus in a relaxed atmosphere.</p>
              </a>
            </div>
          
           
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <a className="service-item rounded" href="">
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i className="fa fa-dumbbell fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 className="mb-3">GYM & Fitness</h5>
                <p className="text-body mb-0">Our gym facility is currently under construction, 
                                              and we sincerely appreciate your patience as we 
                                              work to improve your experience</p>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OurServices