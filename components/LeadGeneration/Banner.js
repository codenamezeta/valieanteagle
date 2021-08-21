import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const ModalVideo = dynamic(() => import('react-modal-video'), {
  ssr: false,
})

class Banner extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }
  render() {
    return (
      <>
        <div id='home' className='lead-generation-banner'>
          <div className='d-table'>
            <div className='d-table-cell'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-7 col-md-12'>
                    <div className='lead-generation-banner-content'>
                      <h1>Valiant Eagle, INC.</h1>
                      <p>
                        Valiant Eagle Inc. is a newly formed US entity. Its
                        principals have nearly sixty years' experience creating
                        and managing several business enterprises.
                      </p>

                      <div className='btn-box'>
                        {/* <Link href='#'>
                          <a className='btn btn-primary'>Get Started</a>
                        </Link> */}

                        <div
                          onClick={(e) => {
                            e.preventDefault()
                            this.openModal()
                          }}
                          className='video-btn popup-youtube'
                        >
                          <i className='fab fa-google-play'></i> Watch our video
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-5 col-md-12'>
                    <div className='lead-generation-form'>
                      <div className='form-header'>
                        <h3>Contact Us</h3>
                        <span>
                          Shareholders or potential shareholders should only
                          contact the company by filling this form out, emailing
                          us or by contacting us via Twitter. No information
                          will be given that is not already public.
                        </span>
                      </div>

                      <form>
                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='Your name'
                            className='form-control'
                          />
                        </div>

                        <div className='form-group'>
                          <input
                            type='email'
                            placeholder='Your email'
                            className='form-control'
                          />
                        </div>

                        <div className='form-group'>
                          <input
                            type='text'
                            placeholder='Phone number'
                            className='form-control'
                          />
                        </div>

                        <button type='submit' className='btn btn-primary'>
                          Call to Action
                        </button>
                      </form>
                      <p>
                        <i className='fas fa-info-circle'></i> We will never
                        share your personal info
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId='UZTyvbmW92M'
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    )
  }
}

export default Banner
