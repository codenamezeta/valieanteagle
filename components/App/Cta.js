import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class Cta extends Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };
    render() {
        return (
            <>
                <section className="cta-area ptb-100 jarallax pb-0">
                    <div className="container">
                        <div className="cta-content">
                            <h2>How App <span>Works</span></h2>
                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                            <div
                                onClick={e => {e.preventDefault(); this.openModal()}}
                                className="video-btn popup-youtube"
                            > 
                                <i className="fas fa-play"></i>
                            </div>
                        </div>

                        <div className="cta-inner-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-cta-box">
                                        <i className="fas fa-download"></i>
                                        <h3>Download</h3>
                                        <p>Duis cursus dictum enim dictum venenatis. Orci varius natoque penatibus et magnis dis.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="single-cta-box">
                                        <i className="fas fa-bars"></i>
                                        <h3>Setup It</h3>
                                        <p>Duis cursus dictum enim dictum venenatis. Orci varius natoque penatibus et magnis dis.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                    <div className="single-cta-box">
                                        <i className="far fa-thumbs-up"></i>
                                        <h3>Enjoy It</h3>
                                        <p>Duis cursus dictum enim dictum venenatis. Orci varius natoque penatibus et magnis dis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default Cta;
