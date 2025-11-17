import Standard from "/img/Standard.jpg";
import royal from "/img/royal.jpg";
import big from "/img/big.jpg";
import double from "/img/double.jpg";

function OurRooms(){
  return (
        
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
          </div>
          <div className="row g-4">

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={Standard} alt=""/>
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">N22,500</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Standard Room</h5>
                  
                  </div>
                  
                  <div className="d-flex justify-content-between">
                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={big} alt=""/>
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">N23,000</small>
                </div>

                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Standard Double</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={double} alt=""/>
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">N24,000</small>
                </div>



                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Big Double</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                  </div>
                </div>



              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={royal} alt=""/>
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">N25,000</small>
                </div>



                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Royal Suit</h5>
                  </div><div className="d-flex justify-content-between">
                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                  </div>
                </div>



              </div>
            </div>

          </div>
        </div>
      </div>
     
  )
}

export default OurRooms