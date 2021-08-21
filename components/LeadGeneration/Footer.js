import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className='footer-area-three bg-fffcf4'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7 col-md-7'>
              <p>
                <i className='far fa-copyright'></i> 2021{' '}
                <a href='/'>Valiant Eagle, INC</a>. All Rights Reserved.
              </p>
            </div>

            <div className='col-lg-5 col-md-5'>
              <ul>
                <li>
                  <a
                    href='https://www.facebook.com/valianteagleinc/'
                    target='_blank'
                    rel='noopener noreferer'
                  >
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/valianteagleinc'
                    target='_blank'
                    rel='noopener noreferer'
                  >
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/company/valiant-eagle-inc/'
                    target='_blank'
                    rel='noopener noreferer'
                  >
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
