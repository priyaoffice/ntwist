import logo from './logo.svg';
import './App.css';
import favicon from './favicon.png';
import head1 from './head1.png';
import head2 from './head2.png';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.png';
import ntwistlight from './ntwistlight.png';

function App() {
  return (
    <div className="App">
      <div class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid">
          <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src={favicon} id='HeaderLogo' />
            <span class="fs-4">NTWIST</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto nav-underline">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Industries
                </a>
                <ul class="dropdown-menu underline">
                  <li><a class="dropdown-item" href="#">Sustainability</a></li>
                  <li><a class="dropdown-item" href="#">Mineral Processing</a></li>
                  <li><a class="dropdown-item" href="#">Mine-to-mill-to-mine optimization</a></li>
                  <li><a class="dropdown-item" href="#">Oil & Gas</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">AI Software</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="banner">
        <div class="d-flex align-items-center position-relative vh-100 cover hero" id='Banner1'>
          <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-10 col-sm-8 col-lg-6">
                <img src={head2} id='Banner2' class="d-block mx-lg-auto img-fluid" />
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3 text-white">
                  Data-powered solution
                </h1>
                <h1 class="display-5 fw-bold lh-1 mb-3 text-white">
                  for inturstial Excelence
                </h1>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" class="btn btn-primary btn-md px-4 me-md-2">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        <div class="container-fluid">
          <div class="col-md-12 col-sm-12">
            <div class="container-fluid text-center">
              <div class="row">
                <div class="col-md-6 d-flex align-items-center">
                  <div class="a">
                    <div className='text-start'>
                      <h1 className='txtorg'>Mine-To-Mill-To-Mine</h1>
                      <h1 className='txtorg'>Optimization</h1>
                      <p id='plefali'>
                        NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.
                      </p>
                      <a className='btn bgorg text-white'>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <div class="b">
                    <img src={img1} id='conimg' />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex align-items-center">
                  <div class="b">
                    <img src={img2} id='conimg' />
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <div class="a">
                    <div className='text-start'>
                      <h1 className='txtorg'>Sustainability</h1>
                      <p id='plefali'>
                        Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.
                      </p>
                      <p id='plefali'>
                        With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.
                      </p>
                      <a className='btn bgorg text-white'>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex align-items-center">
                  <div class="a">
                    <div className='text-start'>
                      <h1 className='txtorg'>Mineral Processing</h1>
                      <p id='plefali'>
                        NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.
                      </p>
                      <a className='btn bgorg text-white'>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <div class="b">
                    <img src={img3} id='conimg' />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex align-items-center">
                  <div class="b">
                    <img src={img4} id='conimg' />
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <div class="a">
                    <div className='text-start'>
                      <h1 className='txtorg'>Oil & Gas</h1>
                      <p id='plefali'>
                        Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment.
                      </p>
                      <p id='plefali'>
                        NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.
                      </p>
                      <a className='btn bgorg text-white'>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="foot">
        <div className='py-3 my-4'>
          <div class="text-center">
            <div id='footlogo'>
              <img id='footimg' src={ntwistlight} />
            </div>
          </div>
          <ul class="nav justify-content-center pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-white">About Us</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-white">About Us</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Privacy Policy</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Sitemap</a></li>
          </ul>
          <p class="text-center text-secondary">9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
          <div className='text-center'>
            <i class="fa-brands fa-square-twitter fa-2xl"></i>
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </div>
          <p class="text-center text-secondary">© 2022. Ntwist Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
