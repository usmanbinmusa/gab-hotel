import CountUp from 'react-countup';
import CountUp1 from 'react-countup';
import CountUp2 from 'react-countup';
function About(){
  return (
      //About Start 
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
              <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Gab Hotel</span></h1>
              <p style={{textAlign: 'justify'}} className="mb-4 ">At Gab Hotel, we redefine hospitality through excellent service, 
                                  elegant rooms, and a serene environment. Our mission is to provide 
                                  every guest with a memorable stay through world-class comfort, 
                                  personalized attention, and exceptional service.
                                  We take pride in our reputation for reliability, cleanliness, and 
                                  customer satisfaction. Whether you are a solo traveler, a family, or a 
                                  corporate guest, we ensure a seamless and enjoyable experience.</p>
              <div className="row g-3 pb-4">
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                      <h2 className="mb-1" data-toggle="counter-up">
                        <CountUp start={0} end={300} duration={3} separator="," />+
                      </h2>
                      <p className="mb-0">Rooms</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                      <h2 className="mb-1"  data-toggle="counter-up">
                        <CountUp1 start={0} end={100} duration={3} separator="," />+
                      </h2>
                      <p className="mb-0">Staffs</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                  <div className="border rounded p-1">
                    <div className="border rounded text-center p-4">
                      <i className="fa fa-users fa-2x text-primary mb-2"></i>
                      <h2 className="mb-1" data-toggle="counter-up">
                        <CountUp2 start={0} end={5000} duration={3} separator="," />+
                      </h2>
                      <p className="mb-0">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">Explore More</a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/A1.jpg" style={{marginTop:'25%'}} />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/A2.jpg"/>
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/A3.jpg"/>
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/A4.jpg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // About End 
  )
}

export default About