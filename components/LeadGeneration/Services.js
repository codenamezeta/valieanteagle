import React, { Component } from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: [
    "<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
}

class Services extends Component {
  state = { display: false }

  componentDidMount() {
    this.setState({ display: true })
  }

  render() {
    return (
      <section id='services' className='services-area ptb-100'>
        <div className='container'>
          <div className='lead-generation-section-title'>
            <span>A few of</span>
            <h2>Our Subsidiaries</h2>
            <div className='bar'></div>
            <p>
              Some catchy lead text goes here. It should be short and intice
              readers to learn more about our subsidiaries.
            </p>
          </div>

          <div className='row'>
            {this.state.display ? (
              <OwlCarousel
                className='services-slides owl-carousel owl-theme'
                {...options}
              >
                <div className='col-lg-12 col-md-12'>
                  <div className='services-box'>
                    <img src='/images/film-reel.jpg' alt='blog' />

                    <div className='services-content'>
                      <h3>Providence Film Group</h3>
                      <p>A short one sentence teaser or tag line.</p>

                      <ul>
                        <li>Movies</li>
                        <li>Television</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='services-box'>
                    <img src='/images/remote.jpg' alt='blog' />

                    <div className='services-content'>
                      <h3>Xavier Media Group</h3>
                      <p>
                        A media holding company owning a portfolio of streaming
                        and broadcast television channels.
                      </p>

                      <ul>
                        <li className='bg-cdf1d8'>Streaming</li>
                        <li className='bg-cdf1d8'>Broadcast Television</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='services-box'>
                    <img src='/images/hiphop.jpg' alt='image' />

                    <div className='services-content'>
                      <h3>Franchise X Entertainment.</h3>
                      <p>
                        This should be used to tell a story and talk about your
                        product.
                      </p>

                      <ul>
                        <li className='bg-f78acb'>Music</li>
                        <li className='bg-f78acb'>Artist Development</li>
                        <li className='bg-f78acb'>Distribution</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='services-box'>
                    <img src='/images/basketball.jpg' alt='image' />

                    <div className='services-content'>
                      <h3>American Basketball Association of Canada</h3>
                      <p>
                        The ABA is the largest professional sports league in the
                        US with over 175 teams playing in most major US cities.
                      </p>

                      <ul>
                        <li className='bg-c679e3'>Hollywood Action</li>
                        <li className='bg-c679e3'>
                          The Beverly Hills Majestics
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='services-box'>
                    <img src='/images/code.jpg' alt='image' />

                    <div className='services-content'>
                      <h3>Hurrah Domains</h3>
                      <p>
                        This should be used to tell a story and talk about
                        Hurrah domains.
                      </p>

                      <ul>
                        <li className='bg-eb6b3d'>IT Solutions</li>
                        <li className='bg-eb6b3d'>Web Design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Services
