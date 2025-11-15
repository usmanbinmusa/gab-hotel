function Caroulsel() {
  return (
    // Carousel Start 
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img className="w-100" src="img/c2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '700px' }}>
                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Welcome to</h6>
                <h1 className="display-3 text-white mb-4 animated slideInDown">GAB HOTEL</h1>
                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
              <img className="w-100" src="img/c1.jpeg" alt="Image"/>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{maxWidth: '700px'}}>
                    <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Welcome to</h6>
                    <h1 className="display-3 text-white mb-4 animated slideInDown">GAB HOTEL</h1>
                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                    <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a>
                  </div>
                </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>
    </div>
    //Carousel End 
  )
}

export default Caroulsel