import React, { Component } from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
  loop: true,
  nav: false,
  dots: false,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
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

class Feedback extends Component {
  state = { display: false }

  componentDidMount() {
    this.setState({ display: true })
  }
  render() {
    return (
      <section id='testimonials' className='feedback-area ptb-100'>
        <div className='container'>
          <div className='lead-generation-section-title'>
            <span>Meet</span>
            <h2>Our Team</h2>
            <div className='bar'></div>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className='row'>
            {this.state.display ? (
              <OwlCarousel
                className='feedback-slides owl-carousel owl-theme'
                {...options}
              >
                <div className='col-lg-12 col-md-12'>
                  <div className='feedback-item'>
                    <img src='/images/client1.png' alt='client' />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <div className='client-info'>
                      <h3>Xavier Mitchell</h3>
                      <span>CEO</span>
                    </div>

                    {/* <i className='fas fa-quote-left'></i> */}
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='feedback-item'>
                    <img src='/images/client2.png' alt='client' />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <div className='client-info'>
                      <h3>James Bond</h3>
                      <span>Team Mate</span>
                    </div>

                    {/* <i className='fas fa-clipboard-user'></i> */}
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='feedback-item'>
                    <img src='/images/client3.png' alt='client' />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <div className='client-info'>
                      <h3>Homer Simpson</h3>
                      <span>Team Mate</span>
                    </div>

                    {/* <i className='fas fa-quote-left'></i> */}
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

export default Feedback
